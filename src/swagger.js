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
  schemes: ['http'],
  produces: ['application/json'],
  tags: [
    {
      name: 'Area',
      description: 'Convert area'
    },
    {
      name: 'Capacity',
      description: 'Convert capacity'
    },
    {
      name: 'Electricity',
      description: 'Perform electricity calculations'
    },
    {
      name: 'Gearing',
      description: 'Perform gearing calculations'
    },
    {
      name: 'Hydraulic',
      description: 'Perform hydraulic calculations'
    },
    {
      name: 'Length',
      description: 'Convert length'
    },
    {
      name: 'Rate',
      description: 'Perform rate calculations'
    },
    {
      name: 'Revolutions',
      description: 'Perform revolution calculations'
    },
    {
      name: 'Speed',
      description: 'Convert speed'
    },
    {
      name: 'Temperature',
      description: 'Convert temperature'
    },
    {
      name: 'Torque',
      description: 'Convert torque'
    },
    {
      name: 'Weight',
      description: 'Convert weight'
    }
  ],
  servers: [
    {
      url: 'http://localhost',
      description: 'Local test server',
    },
  ],
  apis: ['./controllers/v2/*.js'],
};

const outputFile = '../swagger-output.json';
const endpointsFiles = ['./controllers/v2/*.js'];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require('./app'); // Your project's root file
});