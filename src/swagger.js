const swaggerAutogen = require('swagger-autogen')();
const myip = require('quick-local-ip');
const fs = require('fs');
const g = require('./global');

g.Globals.port = process.env.PORT || 3000;
console.log(`Port: ${g.Globals.port}`);

// getting ip4 network address of local system
g.Globals.ipAddress = myip.getLocalIP4();
console.log(`IP Address: ${g.Globals.ipAddress}`);

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
      name: 'Distance',
      description: 'Convert distance'
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
  apis: ['./controllers/v2/*.js'],
  servers: [
    {
      url: `http://${g.Globals.ipAddress}:${g.Globals.port}/`,
    },
  ],
  host: `${g.Globals.ipAddress}:${g.Globals.port}`,
};

const outputFile = '../swagger-output.json';
const endpointsFiles = ['./controllers/v2/*.js'];

fs.writeFileSync(outputFile, '{ }', function (err) {
  if (err) throw err;
  console.log('Wrote blank outputFile');
});

swaggerAutogen(outputFile, endpointsFiles, doc)
  .then(() => {
    require('./app'); // Your project's root file
  });
