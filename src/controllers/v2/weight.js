module.exports = function (app) {
  app.get('/CaratToGram/:input', (req, res) => {
    // #swagger.tags = ['Weight']
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.2
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/GrainToGram/:input', (req, res) => {
    // #swagger.tags = ['Weight']
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.0648
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/GrainToOunce/:input', (req, res) => {
    // #swagger.tags = ['Weight']
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.002285714
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/GrainToTroyPennyweight/:input', (req, res) => {
    // #swagger.tags = ['Weight']
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.04167
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/GramToGrain/:input', (req, res) => {
    // #swagger.tags = ['Weight']
    try {
      const { input } = req.params;
      res.json({
        result: input * 15.4321
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/GramToOunce/:input', (req, res) => {
    // #swagger.tags = ['Weight']
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.035273962
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/GramToPound/:input', (req, res) => {
    // #swagger.tags = ['Weight']
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.002204622622
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/KilogramToPound/:input', (req, res) => {
    // #swagger.tags = ['Weight']
    try {
      const { input } = req.params;
      res.json({
        result: input * 2.204622622
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/OunceToGrain/:input', (req, res) => {
    // #swagger.tags = ['Weight']
    try {
      const { input } = req.params;
      res.json({
        result: input * 437.5
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/OunceToGram/:input', (req, res) => {
    // #swagger.tags = ['Weight']
    try {
      const { input } = req.params;
      res.json({
        result: input * 28.349527
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/OunceToTroyOunce/:input', (req, res) => {
    // #swagger.tags = ['Weight']
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.9114583
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/PointToCarat/:input', (req, res) => {
    // #swagger.tags = ['Weight']
    try {
      const { input } = req.params;
      res.json({
        result: input / 100
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/PointToGram/:input', (req, res) => {
    // #swagger.tags = ['Weight']
    try {
      const { input } = req.params;
      res.json({
        result: input / 500
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/PoundToGram/:input', (req, res) => {
    // #swagger.tags = ['Weight']
    try {
      const { input } = req.params;
      res.json({
        result: input * 453.59237
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/PoundToOunce/:input', (req, res) => {
    // #swagger.tags = ['Weight']
    try {
      const { input } = req.params;
      res.json({
        result: input * 16
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/PoundToTroyPound/:input', (req, res) => {
    // #swagger.tags = ['Weight']
    try {
      const { input } = req.params;
      res.json({
        result: input * 1.21528
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/TroyGrainToGrain/:input', (req, res) => {
    // #swagger.tags = ['Weight']
    try {
      const { input } = req.params;
      res.json({
        result: input
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/TroyPennyweightToGrain/:input', (req, res) => {
    // #swagger.tags = ['Weight']
    try {
      const { input } = req.params;
      res.json({
        result: input * 24
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/TroyPennyweightToTroyOunce/:input', (req, res) => {
    // #swagger.tags = ['Weight']
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.05
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/TroyPoundToPound/:input', (req, res) => {
    // #swagger.tags = ['Weight']
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.822857
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/TroyPoundToTroyOunce/:input', (req, res) => {
    // #swagger.tags = ['Weight']
    try {
      const { input } = req.params;
      res.json({
        result: input * 12
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });
};
