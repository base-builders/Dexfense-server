import express from 'express';
import cors from 'cors';
import userRoutes from "./routes/user.routes"
import codeRoutes from "./routes/code.routes"
import poolRoutes from "./routes/pool.routes"
import gameRoutes from "./routes/game.routes"

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/codes', codeRoutes);
app.use('/api/pools', poolRoutes);
app.use('/api/games', gameRoutes);

export default app;
