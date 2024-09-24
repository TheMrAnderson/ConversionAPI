const express = require('express');
const swaggerUi = require('swagger-ui-express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const swaggerFile = require('../swagger-output.json');
const g = require('./global');

const app = express();

app.get('/', (req, res) => {
  res.send(`Welcome to ConversionAPI!  Documentation is located
  <a href="http://${g.Globals.ipAddress}:${g.Globals.port}/swagger">here</a>`);
});

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(express.json()); // parse body request as json
app.use(helmet());

const limiter = rateLimit({
  windowMs: g.Globals.rateLimitMinutes * 60 * 1000, // Passed in minutes
  max: g.Globals.rateLimitMax, // Limit each IP to passed in number of requests per `window`
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// Apply the rate limiting middleware to all requests
app.use(limiter);

require('./controllers/v2/area')(app);
require('./controllers/v2/capacity')(app);
require('./controllers/v2/distance')(app);
require('./controllers/v2/electricity')(app);
require('./controllers/v2/gearing')(app);
require('./controllers/v2/hydraulic')(app);
require('./controllers/v2/rate')(app);
require('./controllers/v2/revolutions')(app);
require('./controllers/v2/speed')(app);
require('./controllers/v2/temperature')(app);
require('./controllers/v2/torque')(app);
require('./controllers/v2/weight')(app);

app.listen(g.Globals.port, () => {
  console.log(`Running on ${g.Globals.ipAddress}:${g.Globals.port}`);
});
