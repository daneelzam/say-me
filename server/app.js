/* eslint-disable no-underscore-dangle */
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import config from './middleware/index.js';
import authRouter from './routes/auth.js';
import mainRouter from './routes/main.js';

import { sendMailOvulation, sendMailPeriod } from './function.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

config(app);
setInterval(() => sendMailOvulation().then((res) => console.log(res)), 86400000);
setInterval(() => sendMailPeriod().then((res) => console.log(res)), 86400000);
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

app.use('/api/auth', authRouter);
app.use('/api/main', mainRouter);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'client', 'build', 'index.html'));
});
export default app;
