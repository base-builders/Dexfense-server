import { socketManager } from '../socketManager';
import { Prisma, PrismaClient, Difficulty } from '../../generated/prisma';

const prisma = new PrismaClient();

interface SaveResultParams {
  userId: number;
  address: string;
  difficulty: Difficulty;
  totalMonstersKilled: number;
  lastWave: number;
}

export const saveResult = async ({
  userId,
  address,
  difficulty,
  totalMonstersKilled,
  lastWave,
}: SaveResultParams) => {
  const difficultyInput = difficulty; // 사용자 입력
  const difficultyEnum = Difficulty[difficultyInput.toUpperCase() as keyof typeof Difficulty];

  try {
    const criticalCount = 10;

    const result = await prisma.$transaction(async (tx) => {
      // 1) 게임 결과 저장
      const created = await tx.gameResultLog.create({
        data: {
          userId,
          difficulty: difficultyEnum,
          totalMonstersKilled,
          lastWave,
        },
      });

      // 2) 카운터 원자적 증가 (없으면 생성)
      const counter = await tx.dynamicFactorCount.upsert({
        where: { difficulty: difficultyEnum },
        update: { count: { increment: 1 } },
        create: { difficulty: difficultyEnum, count: 1 },
      });

      // 3) 임계치 배수에서만 계산 수행 (10, 20, 30 ...)
      const shouldCompute = counter.count % criticalCount === 0;

      if (shouldCompute) {
        await saveDaf(tx, difficultyEnum as 'EASY' | 'NORMAL' | 'HARD', criticalCount);

        // 4) 카운터는 임계치만큼 감소하여 동시 증가분 보존
        await tx.dynamicFactorCount.update({
          where: { difficulty: difficultyEnum },
          data: { count: { decrement: criticalCount } },
        });
      }

      return created;
    });

    // 트랜잭션 커밋 후 방송 (부작용은 커밋 성공 후에만)
    if (totalMonstersKilled >= 400) {
      socketManager.broadcast({
        type: 'highKill',
        address,
        kills: totalMonstersKilled,
        difficulty,
      });
    }

    return result;
  } catch (error) {
    console.error('[saveResult] Error saving game result:', error);
    throw new Error('Failed to save game result');
  }
};


// get lastest 50 game results and calculate DAF (transactional)
const saveDaf = async (
  tx: Prisma.TransactionClient,
  difficulty: 'EASY' | 'NORMAL' | 'HARD',
  criticalCount: number
) => {
  const results = await tx.gameResultLog.findMany({
    where: { difficulty },
    orderBy: { createdAt: 'desc' },
    take: criticalCount,
    select: { 
      id: true,
      totalMonstersKilled: true
    },
  });
  let lastDafValue = 1;

  const lastDaf = await tx.dynamicAdjustmentFactor.findFirst({
    where: { difficulty },
    orderBy: { createdAt: 'desc' },
  });

  if(lastDaf) {
    lastDafValue = lastDaf.factorValue;
  }

  if (results.length < criticalCount) {
    console.warn('Not enough results to calculate DAF');
    return;
  }

  // get average kills in 50 gmaes
  const totalKills = results.reduce((sum, result) => sum + result.totalMonstersKilled, 0);
  const averageKills = totalKills / results.length;

  const critical = difficulty === "EASY" ? 404 : difficulty === "NORMAL" ? 380 : 360;

  let newDaf = lastDafValue;
  if (averageKills >= critical) {
    if( averageKills/critical > 1.1 ) {
      newDaf += 0.8; // 너무 잘함
    } else {
      newDaf += 0.04; // 잘함
    }
  } else {
    if( averageKills/critical < 0.9 ) {
      newDaf -= 0.06; // 너무 못함
    } else {
      newDaf -= 0.03; // 못함
    }
  }

  // insert new DAF
  await tx.dynamicAdjustmentFactor.create({
    // id, difficulty, factorValue, resultIds, createdAt
    data: {
      difficulty,
      factorValue: newDaf,
      resultIds: results.map(r => r.id),
    },
  });
}

// get memory difficulty dynamic adjustment factor
export const getDaf = async (difficulty: "EASY" | "NORMAL" | "HARD") => {
  const lastDaf = await prisma.dynamicAdjustmentFactor.findFirst({
    where: { difficulty },
    orderBy: { createdAt: 'desc' },
  });

  if (!lastDaf) {
    return { factorValue: 1.0 }; // 기본값
  }

  return { factorValue: lastDaf.factorValue };
};

// get lastest 50 game results
export const getGameHistory = async () => {
  const [hard, normal, easy] = await Promise.all([
    prisma.gameResultLog.findMany({
      where: { difficulty: "HARD" },
      orderBy: { createdAt: "desc" },
      take: 50,
      select: {
        totalMonstersKilled: true,
        createdAt: true,
        user: { select: { address: true } },
      },
    }),
    prisma.gameResultLog.findMany({
      where: { difficulty: "NORMAL" },
      orderBy: { createdAt: "desc" },
      take: 50,
      select: {
        totalMonstersKilled: true,
        createdAt: true,
        user: { select: { address: true } },
      },
    }),
    prisma.gameResultLog.findMany({
      where: { difficulty: "EASY" },
      orderBy: { createdAt: "desc" },
      take: 50,
      select: {
        totalMonstersKilled: true,
        createdAt: true,
        user: { select: { address: true } },
      },
    }),
  ]);

  return { hard, normal, easy };
};

// 게임 시작 시 게임 레코드 생성
export const createGame = async (userId: number, difficulty: Difficulty) => {
  const difficultyEnum = Difficulty[difficulty.toUpperCase() as keyof typeof Difficulty];
  
  const game = await prisma.game.create({
    data: {
      userId,
      difficulty: difficultyEnum,
      waveCount: 1,
    },
  });
  
  return game;
};

// 카드 선택지 요청 (랜덤 3개 인덱스 반환)
export const getCardChoices = async (gameId: number, waveNumber: number) => {
  // 전체 카드 선택지 개수 (getAllChoices에서 반환하는 배열 길이)
  // 첫 번째 웨이브: 10개, 그 이후: 최대 13개
  const totalCardCount = waveNumber === 1 ? 10 : 13;
  
  // 게임 존재 여부 확인
  const game = await prisma.game.findUnique({
    where: { id: gameId },
  });

  if (!game) {
    throw new Error("Game not found");
  }

  // 웨이브 번호 검증
  if (waveNumber < 1 || waveNumber > 25) {
    throw new Error("Invalid wave number");
  }

  // 현재 웨이브와 요청 웨이브 비교
  if (waveNumber > game.waveCount + 1) {
    throw new Error("Cannot request cards for future waves");
  }
  
  // 랜덤하게 3개 인덱스 선택
  const offeredCards = [];
  const usedIndices = new Set<number>();
  
  while (offeredCards.length < 3) {
    const randomIndex = Math.floor(Math.random() * totalCardCount);
    if (!usedIndices.has(randomIndex)) {
      offeredCards.push(randomIndex);
      usedIndices.add(randomIndex);
    }
  }
  
  // 카드 선택지 로깅을 위한 임시 레코드 생성 (선택 전)
  const cardChoice = await prisma.cardChoice.create({
    data: {
      gameId,
      waveNumber,
      cardType: 'NORMAL', // 일반 카드
      offeredCards,
      selectedCard: -1, // 아직 선택되지 않음
    },
  });
  
  return {
    offeredCards,
    cardChoiceId: cardChoice.id,
  };
};

// 카드 선택 완료 시 로깅 업데이트
export const updateCardChoice = async (cardChoiceId: number, selectedCardIndex: number) => {
  // 카드 선택지 레코드 확인
  const cardChoice = await prisma.cardChoice.findUnique({
    where: { id: cardChoiceId },
  });

  if (!cardChoice) {
    throw new Error("Card choice not found");
  }

  // 이미 선택된 카드인지 확인
  if (cardChoice.selectedCard !== -1) {
    throw new Error("Card already selected");
  }

  // 선택된 카드 인덱스가 제공된 카드 목록에 있는지 확인
  if (!cardChoice.offeredCards.includes(selectedCardIndex)) {
    throw new Error("Invalid card selection");
  }

  const updated = await prisma.cardChoice.update({
    where: { id: cardChoiceId },
    data: { selectedCard: selectedCardIndex },
  });
  
  return updated;
};

// 게임 웨이브 업데이트
export const updateGameWave = async (gameId: number, waveCount: number) => {
  // 게임 존재 여부 확인
  const game = await prisma.game.findUnique({
    where: { id: gameId },
  });

  if (!game) {
    throw new Error("Game not found");
  }

  // 웨이브 번호 검증
  if (waveCount < 1 || waveCount > 25) {
    throw new Error("Invalid wave count");
  }

  // 웨이브 진행 순서 검증
  if (waveCount > game.waveCount + 1) {
    throw new Error("Cannot skip waves");
  }

  if (waveCount < game.waveCount) {
    throw new Error("Cannot go back to previous waves");
  }

  const updated = await prisma.game.update({
    where: { id: gameId },
    data: { waveCount },
  });
  
  return updated;
};

// 보스 카드 선택지 요청 (랜덤 3개 인덱스 반환)
export const getBossCardChoices = async (gameId: number, waveNumber: number) => {
  // 전체 보스 카드 선택지 개수
  const totalBossCardCount = 5;
  
  // 게임 존재 여부 확인
  const game = await prisma.game.findUnique({
    where: { id: gameId },
  });

  if (!game) {
    throw new Error("Game not found");
  }

  // 보스 웨이브인지 확인 (5의 배수)
  if (waveNumber % 5 !== 0) {
    throw new Error("Boss cards can only be requested on boss waves");
  }

  // 웨이브 번호 검증
  if (waveNumber < 1 || waveNumber > 25) {
    throw new Error("Invalid wave number");
  }

  // 현재 웨이브와 요청 웨이브 비교
  if (waveNumber > game.waveCount + 1) {
    throw new Error("Cannot request cards for future waves");
  }
  
  // 랜덤하게 3개 인덱스 선택
  const offeredCards = [];
  const usedIndices = new Set<number>();
  
  while (offeredCards.length < 3) {
    const randomIndex = Math.floor(Math.random() * totalBossCardCount);
    if (!usedIndices.has(randomIndex)) {
      offeredCards.push(randomIndex);
      usedIndices.add(randomIndex);
    }
  }
  
  // 카드 선택지 로깅을 위한 임시 레코드 생성 (선택 전)
  const cardChoice = await prisma.cardChoice.create({
    data: {
      gameId,
      waveNumber,
      cardType: 'BOSS', // 보스 카드
      offeredCards,
      selectedCard: -1, // 아직 선택되지 않음
    },
  });
  
  return {
    offeredCards,
    cardChoiceId: cardChoice.id,
  };
};