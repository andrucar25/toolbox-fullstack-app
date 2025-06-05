import express from 'express'
import registerFileRoutes from './routes/files.routes.js'

const app = express()

app.use(express.json())

const filesRouter = express.Router()
registerFileRoutes(filesRouter)

app.use('/files', filesRouter)

export default app
