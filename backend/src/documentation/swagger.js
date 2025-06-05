import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import { swaggerOptions } from './swagger-definition.js'
// import './swagger.files.js'

const swaggerSpec = swaggerJSDoc(swaggerOptions)

const setupSwaggerDocs = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
}

export default setupSwaggerDocs
