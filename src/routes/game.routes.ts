import { Router } from 'express';
import { daf, easyMode, hardMode, history, normalMode, startGame, requestCardChoices, selectCard, updateWave, requestBossCardChoices } from '../controllers/game.controller';
import { authMiddleware } from '../middleware/auth.middleware';
import { requireAdmin } from '../middleware/requireAdmin';
import { socketManager } from '../socketManager';

const router = Router();

router.post('/easy', authMiddleware,easyMode);
router.post('/normal', authMiddleware,normalMode);
router.post('/hard', authMiddleware,hardMode);

router.get('/history', history);
router.get('/daf', daf);

// 새로운 게임 관련 엔드포인트들
router.post('/start', authMiddleware, startGame);
router.post('/card-choices', authMiddleware, requestCardChoices);
router.post('/boss-card-choices', authMiddleware, requestBossCardChoices);
router.post('/select-card', authMiddleware, selectCard);
router.post('/update-wave', authMiddleware, updateWave);

router.post('/', authMiddleware, requireAdmin, async (req, res) => {
    try {
        const message = req.body.message;
        socketManager.broadcast({ message });
        res.status(200).json({ success: true, message: 'Broadcast sent successfully' });
    } catch (error) {
        console.error('Error broadcasting message:', error);
        res.status(500).json({ success: false, message: 'Failed to broadcast' });
    }
});


export default router;
