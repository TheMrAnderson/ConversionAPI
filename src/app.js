const express = require('express');
// const swaggerJsDoc = require('swagger-jsdoc');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('../swagger-output.json')

// const areaRouter = require('./routes/v2/area');
// const capRouter = require('./routes/v2/capacity');
// const elecRouter = require('./routes/v2/electricity');
// const gearRouter = require('./routes/v2/gearing');
// const lenRouter = require('./routes/v2/length');
// const rateRouter = require('./routes/v2/rate');
// const revsRouter = require('./routes/v2/revolutions');
// const speedRouter = require('./routes/v2/speed');
// const tempRouter = require('./routes/v2/temperature');
// const torqRouter = require('./routes/v2/torque');
// const weigRouter = require('./routes/v2/weight');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('combined'));

// app.use('/api/v2/area', areaRouter);
// app.use('/api/v2/capacity', capRouter);
// app.use('/api/v2/electricity', elecRouter);
// app.use('/api/v2/gearing', gearRouter);
// app.use('/api/v2/length', lenRouter);
// app.use('/api/v2/rate', rateRouter);
// app.use('/api/v2/revolutions', revsRouter);
// app.use('/api/v2/speed', speedRouter);
// app.use('/api/v2/temperature', tempRouter);
// app.use('/api/v2/torque', torqRouter);
// app.use('/api/v2/weight', weigRouter);

app.get('/', (req, res) => {
  res.send(`Welcome to ConversionAPI!  Documentation is on http://localhost:${port}/swagger`);
});

// const options = {
//   definition: {
//     openapi: '3.0.0',
//     info: {
//       title: 'ConversionAPI',
//       version: '2.0.0',
//       description:
//         'An API to handle multiple conversions and calculations in one place',
//     },
//   },
//   servers: [
//     {
//       url: `http://localhost:${port}`,
//       description: 'Local test server',
//     },
//   ],
//   apis: ['./routes/v2/*.js'],
// };

// const specs = swaggerJsDoc(options);
// app.use(
//   '/swagger',
//   swaggerUi.serve,
//   swaggerUi.setup(specs)
// );

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerFile));

require('./controllers/v2/area')(app);
require('./controllers/v2/capacity')(app);
require('./controllers/v2/electricity')(app);
require('./controllers/v2/gearing')(app);
require('./controllers/v2/hydraulic')(app);
require('./controllers/v2/length')(app);
// require('./controllers/v2/pulley')(app);
require('./controllers/v2/rate')(app);
require('./controllers/v2/revolutions')(app);
require('./controllers/v2/speed')(app);
require('./controllers/v2/temperature')(app);
require('./controllers/v2/torque')(app);
require('./controllers/v2/weight')(app);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
