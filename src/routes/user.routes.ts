import { Router } from 'express';
import { getUsers, Signin, Signup, getUser } from '../controllers/user.controller';
import { socketManager } from '../socketManager';

const router = Router();

router.get('/', function (req, res) {
    res.send('respond with a resource');
    socketManager.broadcast({ message: 'Hello from the server!' });
});  
router.post('/signup', Signup);
router.post('/signin', Signin);
router.get('/balance', getUser);

export default router;
