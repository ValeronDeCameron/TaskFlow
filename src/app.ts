import dotenv from 'dotenv'
import express, { type NextFunction, type Request, type Response } from 'express'
import routes from './routes.js'
import cors from 'cors'
import { logger } from './middlewares/logger.js'
import { ErrorHandler } from './middlewares/ErrorHandler.js'
dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger)
app.use('/api', routes)


app.get('/health', (req, res)=> {
    res.json({status: 'OK'})
})

app.use(ErrorHandler)

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`)
})