import { Role } from '../../generated/prisma'; // 또는 @prisma/client 경로에 따라

// Prisma User 모델 기반 유저 타입
export interface UserEntity {
  id: number;
  address: string;
  password: string;
  role: Role;
  codeId: number;
  createdAt: Date;
}

// Prisma Code 모델 기반 타입
export interface CodeEntity {
  id: number;
  code: string;
  userId: number | null;
  createdAt: Date;
}

// JWT 페이로드 타입
export interface JWTPayload {
  address: string;
  role: Role;
  exp: number;
  iat?: number;
}

// Express에 req.user 타입 추가
declare global {
  namespace Express {
    interface Request {
      user?: JWTPayload;
    }
  }
}
