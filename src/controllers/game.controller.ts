import { Request, Response } from 'express';
import { RequestHandler } from "express";
import { saveResult, getGameHistory, getDaf, createGame, getCardChoices, updateCardChoice, updateGameWave, getBossCardChoices } from '../services/game.service';
import { Difficulty, PrismaClient } from '../../generated/prisma';
import { executeGameResult } from '../services/pool.service';

const prisma = new PrismaClient();

const handleResultSave = async (
    req: Request,
    res: Response
) => {
    const { difficulty, totalMonstersKilled, lastWave } = req.body;

    if (!difficulty || totalMonstersKilled === undefined || lastWave === undefined) {
        res.status(400).json({ message: 'Required fields are missing' });
        return 
    }

    if (!req.user?.address) {
        res.status(401).json({ message: 'Unauthorized: No address in token' });
        return 
    }

    try {
        const user = await prisma.user.findUnique({
            where: { address: req.user.address },
        });

        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return 
        }

        const result = await saveResult({
            userId: user.id,
            address: req.user.address,
            difficulty,
            totalMonstersKilled,
            lastWave,
        });

        let input = 0;
        if (difficulty === "easy") {
            input = 0.0001;
        } else if (difficulty === "normal") {
            input = 0.001;
        } else if (difficulty === "hard") {
            input = 0.01;
        }
        
        executeGameResult(input,(totalMonstersKilled/400),user.id);

        res.status(201).json(result);
    } catch (err) {
        console.error('[saveResult]', err);
        res.status(500).json({ message: 'Failed to save game result' });
    }
};

// 각각 난이도별 엔드포인트
export const easyMode = async (req: Request, res: Response) => {
    handleResultSave(req, res);
};

export const normalMode = async (req: Request, res: Response) => {
    handleResultSave(req, res);
};

export const hardMode = async (req: Request, res: Response) => {
    handleResultSave(req, res);
};


export const history = async (req: Request, res: Response) => {
    try {
        const history = await getGameHistory();
        res.status(200).json(history);
    } catch (error) {
        console.error('Error fetching game history:', error);
        res.status(500).json({ message: 'Failed to fetch game history' });
    }
}

export const daf = async (req: Request, res: Response) => {
    try {
      const { difficulty } = req.query;
      if (
        typeof difficulty !== "string" ||
        !["easy", "normal", "hard"].includes(difficulty.toLowerCase())
      ) {
        res.status(400).json({ message: "Invalid difficulty" });
        return
      }
  
      const result = await getDaf(difficulty.toUpperCase() as "EASY" | "NORMAL" | "HARD");
      res.status(200).json(result);
    } catch (error) {
      console.error("Error fetching daf:", error);
      res.status(500).json({ message: "Failed to fetch game daf" });
    }
  };

// 게임 시작 API
export const startGame = async (req: Request, res: Response) => {
    try {
        const { difficulty } = req.body;
        
        if (!difficulty || !["easy", "normal", "hard"].includes(difficulty.toLowerCase())) {
            res.status(400).json({ message: "Invalid difficulty" });
            return;
        }

        if (!req.user?.address) {
            res.status(401).json({ message: "Unauthorized: No address in token" });
            return;
        }

        const user = await prisma.user.findUnique({
            where: { address: req.user.address },
        });

        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        const game = await createGame(user.id, difficulty);
        res.status(201).json({ gameId: game.id });
    } catch (error) {
        console.error("Error starting game:", error);
        res.status(500).json({ message: "Failed to start game" });
    }
};

// 카드 선택지 요청 API
export const requestCardChoices = async (req: Request, res: Response) => {
    try {
        const { gameId, waveNumber } = req.body;
        
        if (!gameId || !waveNumber) {
            res.status(400).json({ message: "gameId and waveNumber are required" });
            return;
        }

        if (!req.user?.address) {
            res.status(401).json({ message: "Unauthorized: No address in token" });
            return;
        }

        // 게임 소유권 확인
        const user = await prisma.user.findUnique({
            where: { address: req.user.address },
        });

        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        const game = await prisma.game.findFirst({
            where: { 
                id: gameId,
                userId: user.id 
            },
        });

        if (!game) {
            res.status(403).json({ message: "Game not found or access denied" });
            return;
        }

        // 웨이브 번호 유효성 검사
        if (waveNumber < 1 || waveNumber > 25) {
            res.status(400).json({ message: "Invalid wave number" });
            return;
        }

        // 현재 게임 웨이브와 요청 웨이브 비교 (위변조 방지)
        if (waveNumber > game.waveCount + 1) {
            res.status(400).json({ message: "Cannot request cards for future waves" });
            return;
        }

        const result = await getCardChoices(gameId, waveNumber);
        res.status(200).json(result);
    } catch (error) {
        console.error("Error getting card choices:", error);
        res.status(500).json({ message: "Failed to get card choices" });
    }
};

// 카드 선택 완료 API
export const selectCard = async (req: Request, res: Response) => {
    try {
        const { cardChoiceId, selectedCardIndex } = req.body;
        
        if (cardChoiceId === undefined || selectedCardIndex === undefined) {
            res.status(400).json({ message: "cardChoiceId and selectedCardIndex are required" });
            return;
        }

        if (!req.user?.address) {
            res.status(401).json({ message: "Unauthorized: No address in token" });
            return;
        }

        // 사용자 확인
        const user = await prisma.user.findUnique({
            where: { address: req.user.address },
        });

        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        // 카드 선택지 레코드 확인 및 소유권 검증
        const cardChoice = await prisma.cardChoice.findFirst({
            where: { id: cardChoiceId },
            include: { game: true },
        });

        if (!cardChoice) {
            res.status(404).json({ message: "Card choice not found" });
            return;
        }

        if (cardChoice.game.userId !== user.id) {
            res.status(403).json({ message: "Access denied" });
            return;
        }

        // 이미 선택된 카드인지 확인
        if (cardChoice.selectedCard !== -1) {
            res.status(400).json({ message: "Card already selected" });
            return;
        }

        // 선택된 카드 인덱스가 제공된 카드 목록에 있는지 확인
        if (!cardChoice.offeredCards.includes(selectedCardIndex)) {
            res.status(400).json({ message: "Invalid card selection" });
            return;
        }

        const result = await updateCardChoice(cardChoiceId, selectedCardIndex);
        res.status(200).json(result);
    } catch (error) {
        console.error("Error updating card choice:", error);
        res.status(500).json({ message: "Failed to update card choice" });
    }
};

// 웨이브 업데이트 API
export const updateWave = async (req: Request, res: Response) => {
    try {
        const { gameId, waveCount } = req.body;
        
        if (!gameId || !waveCount) {
            res.status(400).json({ message: "gameId and waveCount are required" });
            return;
        }

        if (!req.user?.address) {
            res.status(401).json({ message: "Unauthorized: No address in token" });
            return;
        }

        // 사용자 확인
        const user = await prisma.user.findUnique({
            where: { address: req.user.address },
        });

        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        // 게임 소유권 확인
        const game = await prisma.game.findFirst({
            where: { 
                id: gameId,
                userId: user.id 
            },
        });

        if (!game) {
            res.status(403).json({ message: "Game not found or access denied" });
            return;
        }

        // 웨이브 번호 유효성 검사
        if (waveCount < 1 || waveCount > 25) {
            res.status(400).json({ message: "Invalid wave count" });
            return;
        }

        // 웨이브 진행 순서 검증 (위변조 방지)
        if (waveCount > game.waveCount + 1) {
            res.status(400).json({ message: "Cannot skip waves" });
            return;
        }

        if (waveCount < game.waveCount) {
            res.status(400).json({ message: "Cannot go back to previous waves" });
            return;
        }

        const result = await updateGameWave(gameId, waveCount);
        res.status(200).json(result);
    } catch (error) {
        console.error("Error updating wave:", error);
        res.status(500).json({ message: "Failed to update wave" });
    }
};

// 보스 카드 선택지 요청 API
export const requestBossCardChoices = async (req: Request, res: Response) => {
    try {
        const { gameId, waveNumber } = req.body;
        
        if (!gameId || !waveNumber) {
            res.status(400).json({ message: "gameId and waveNumber are required" });
            return;
        }

        if (!req.user?.address) {
            res.status(401).json({ message: "Unauthorized: No address in token" });
            return;
        }

        // 게임 소유권 확인
        const user = await prisma.user.findUnique({
            where: { address: req.user.address },
        });

        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        const game = await prisma.game.findFirst({
            where: { 
                id: gameId,
                userId: user.id 
            },
        });

        if (!game) {
            res.status(403).json({ message: "Game not found or access denied" });
            return;
        }

        // 보스 웨이브인지 확인
        if (waveNumber % 5 !== 0) {
            res.status(400).json({ message: "Boss cards can only be requested on boss waves" });
            return;
        }

        // 웨이브 번호 유효성 검사
        if (waveNumber < 1 || waveNumber > 25) {
            res.status(400).json({ message: "Invalid wave number" });
            return;
        }

        // 현재 게임 웨이브와 요청 웨이브 비교 (위변조 방지)
        if (waveNumber > game.waveCount + 1) {
            res.status(400).json({ message: "Cannot request cards for future waves" });
            return;
        }

        const result = await getBossCardChoices(gameId, waveNumber);
        res.status(200).json(result);
    } catch (error) {
        console.error("Error getting boss card choices:", error);
        res.status(500).json({ message: "Failed to get boss card choices" });
    }
};