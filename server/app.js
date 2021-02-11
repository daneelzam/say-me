import express from 'express';
import config from './middleware/index.js';
import authRouter from './routes/auth.js';
import mainRouter from './routes/main.js';

import { sendMailOvulation, sendMailPeriod } from './function.js';

const app = express();

config(app);
setInterval(() => sendMailOvulation().then((res) => console.log(res)), 86400000);
setInterval(() => sendMailPeriod().then((res) => console.log(res)), 86400000);
app.use('/api/auth', authRouter);
app.use('/api/main', mainRouter);

export default app;
