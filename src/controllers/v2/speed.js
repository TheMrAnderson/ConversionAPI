module.exports = (app) => {
  app.get('/api/v2/Speed/MphToKnots/:input', (req, res) => {
    // #swagger.tags = ['Speed']
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.8689758
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Speed/KnotsToMph/:input', (req, res) => {
    // #swagger.tags = ['Speed']
    try {
      const { input } = req.params;
      res.json({
        result: input * 1.15078
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Speed/KnotsToMach/:input', (req, res) => {
    // #swagger.tags = ['Speed']
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.0015117824339371
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Speed/MphToMach/:input', (req, res) => {
    // #swagger.tags = ['Speed']
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.001303
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });
};
