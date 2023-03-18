module.exports = (app) => {
  app.get('/api/v2/Temperature/CelciusToFehrenheit/:input', (req, res) => {
    // #swagger.tags = ['Temperature']
    try {
      const obj = (req.params.input * 1.8) + 32;
      res.json({
        result: obj
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Temperature/FehrenheitToCelcius/:input', (req, res) => {
    // #swagger.tags = ['Temperature']
    try {
      const obj = (req.params.input - 32) * 0.555555555556;
      res.json({
        result: obj
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });
};
