const express = require('express');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger-output.json');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.send(`Welcome to ConversionAPI!  Documentation is on http://SERVERIP:${port}/swagger`);
});

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerFile));

require('./controllers/v2/area')(app);
require('./controllers/v2/capacity')(app);
require('./controllers/v2/electricity')(app);
require('./controllers/v2/gearing')(app);
require('./controllers/v2/hydraulic')(app);
require('./controllers/v2/length')(app);
require('./controllers/v2/rate')(app);
require('./controllers/v2/revolutions')(app);
require('./controllers/v2/speed')(app);
require('./controllers/v2/temperature')(app);
require('./controllers/v2/torque')(app);
require('./controllers/v2/weight')(app);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
