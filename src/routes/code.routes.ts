import { Router } from 'express';
import { createCode } from '../controllers/code.controller';
import { authMiddleware } from '../middleware/auth.middleware';
import { requireAdmin } from '../middleware/requireAdmin';

const router = Router();

router.post('/', authMiddleware, requireAdmin, createCode);

export default router;