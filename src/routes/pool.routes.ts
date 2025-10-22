import { Router } from 'express';
import { getPools, expectRatio, swap } from '../controllers/pool.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();

router.get('/', getPools);
router.get('/expectRatio', expectRatio);
router.post('/swap', authMiddleware,swap);

export default router;
