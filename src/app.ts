import dotenv from 'dotenv'
import express, { type NextFunction, type Request, type Response } from 'express'
import routes from './routes.js'
import cors from 'cors'
dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', routes)
app.get('/health', (req, res)=> {
    res.json({status: 'OK'})
})

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({message: err.message})
})

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`)
})