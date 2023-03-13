const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const morgan = require('morgan');

// const areaRouter = require('./routes/v2/area');
// const capRouter = require('./routes/v2/capacity');
const elecRouter = require('./routes/v2/electricity');
const gearRouter = require('./routes/v2/gearing');
// const lenRouter = require('./routes/v2/length');
const rateRouter = require('./routes/v2/rate');
const revsRouter = require('./routes/v2/revolutions');
const speedRouter = require('./routes/v2/speed');
const tempRouter = require('./routes/v2/temperature');
// const torqRouter = require('./routes/v2/torque');
// const weigRouter = require('./routes/v2/weight');

const app = express();
const port = process.env.PORT || 8000;

app.use(morgan('combined'));

app.use('/api/v2/electricity', elecRouter);
app.use('/api/v2/gearing', gearRouter);
app.use('/api/v2/rate', rateRouter);
app.use('/api/v2/revolutions', revsRouter);
app.use('/api/v2/speed', speedRouter);
app.use('/api/v2/temperature', tempRouter);

app.get('/', (req, res) => {
  res.send('Welcome to ConversionAPI');
});

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'ConversionAPI',
      version: '2.0.0',
      description:
        'An API to handle multiple conversions in one place',
    },
  },
  servers: [
    {
      url: `http://localhost:${port}`,
      description: 'Local test server',
    },
  ],
  apis: ['./routes/v2/*.js'],
};

const specs = swaggerJsDoc(options);
app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(specs)
);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
