import express from 'express'
import cors from 'cors'
import registerFileRoutes from './routes/files.routes.js'
import setupSwaggerDocs from '../documentation/swagger.js'


const app = express()
setupSwaggerDocs(app)

app.use(cors())
app.use(express.json())

const filesRouter = express.Router()
registerFileRoutes(filesRouter)

app.use('/files', filesRouter)

export default app
