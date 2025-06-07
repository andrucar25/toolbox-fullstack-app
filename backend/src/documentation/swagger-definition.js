export const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Toolbox Fullstack Challenge - Backend',
    version: '1.0.0',
    description: 'Documentation for the backend of the fullstack challenge of Toolbox'
  },
  servers: [
    {
      url: 'http://localhost:4000',
      description: 'Local server'
    }
  ],
  apis: ['./swagger.files.js']
}

export const swaggerOptions = {
  swaggerDefinition,
  // apis: ['./src/presentation/routes/*.js']
  apis: ['./src/documentation/swagger.files.js']

}
