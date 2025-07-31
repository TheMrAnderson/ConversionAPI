const swaggerAutogen = require('swagger-autogen')();
const fs = require('fs');
const g = require('./global');
require('dotenv').config();

g.Globals.port = process.env.PORT || 3000;
g.Globals.ipAddress = process.env.IPADDRESS;
g.Globals.rateLimitMinutes = process.env.RATELIMITMINUTES || 15;
g.Globals.rateLimitMax = process.env.RATELIMITMAX || 100;

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
      name: 'Diving',
      description: 'Perform diving calculations'
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
  definitions: {
    GearingChange: {
      oldTireDiamIn: '30',
      newTireDiamIn: '35',
      oldAxleRatio: '3.73',
      newAxleRatio: '4.88',
      tCaseLowRatio: '4',
      auxRatio: '1.6',
      transRatioGearList: [
        {
          name: '1st',
          ratio: '3.83'
        }
      ]
    }
  }
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
