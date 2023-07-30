import swaggerJSDoc from 'swagger-jsdoc';

export const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'SKILL SWAP - API V1',
      description:
        '<b>SKILL SWAP</b> project <b>API V1</b> documentation, by the backend team of the _No-Country "S9-13-m-express-react"_ group.<br><br>Here are all the routes to consume from the Frontend, with the `GET - POST - PUT - PATCH - DELETE` methods.<br>There is also the information that is required and the endpoints can be tested to see the response and if they are working',
      version: '1.0.0',
    },
  },
  apis: ['./src/schema/**/*.yaml'],
});
