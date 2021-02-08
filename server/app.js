import express from 'express';
import config from './middleware/index.js';
import authRouter from './routes/auth.js';
import mainRouter from './routes/main.js';

const app = express();

config(app);
app.use('/api/auth', authRouter);
app.use('/', mainRouter);

export default app;
