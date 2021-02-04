import express from 'express'
import config from "./middleware/index.js";
const app = express();
import authRouter from './routes/auth.js'
import mainRouter from './routes/main.js'


config(app)
app.use('/auth',authRouter)
app.use('/',mainRouter)

export default app