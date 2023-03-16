const swaggerAutogen = require('swagger-autogen')();

const doc = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'ConversionAPI',
      version: '2.0.0',
      description:
        'An API to handle multiple conversions and calculations in one place',
    },
  },
  servers: [
    {
      url: 'http://localhost',
      description: 'Local test server',
    },
  ],
  apis: ['./src/controllers/v2/*.js'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./src/controllers/v2/*.js'];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require('./app'); // Your project's root file
});
