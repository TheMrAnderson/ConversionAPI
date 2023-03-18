module.exports = (app) => {
  app.get('/api/v2/Weight/CaratToGram/:input', (req, res) => {
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

  app.get('/api/v2/Weight/GrainToGram/:input', (req, res) => {
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

  app.get('/api/v2/Weight/GrainToOunce/:input', (req, res) => {
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

  app.get('/api/v2/Weight/GrainToTroyPennyweight/:input', (req, res) => {
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

  app.get('/api/v2/Weight/GramToGrain/:input', (req, res) => {
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

  app.get('/api/v2/Weight/GramToOunce/:input', (req, res) => {
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

  app.get('/api/v2/Weight/GramToPound/:input', (req, res) => {
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

  app.get('/api/v2/Weight/KilogramToPound/:input', (req, res) => {
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

  app.get('/api/v2/Weight/OunceToGrain/:input', (req, res) => {
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

  app.get('/api/v2/Weight/OunceToGram/:input', (req, res) => {
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

  app.get('/api/v2/Weight/OunceToTroyOunce/:input', (req, res) => {
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

  app.get('/api/v2/Weight/PointToCarat/:input', (req, res) => {
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

  app.get('/api/v2/Weight/PointToGram/:input', (req, res) => {
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

  app.get('/api/v2/Weight/PoundToGram/:input', (req, res) => {
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

  app.get('/api/v2/Weight/PoundToOunce/:input', (req, res) => {
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

  app.get('/api/v2/Weight/PoundToTroyPound/:input', (req, res) => {
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

  app.get('/api/v2/Weight/TroyGrainToGrain/:input', (req, res) => {
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

  app.get('/api/v2/Weight/TroyPennyweightToGrain/:input', (req, res) => {
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

  app.get('/api/v2/Weight/TroyPennyweightToTroyOunce/:input', (req, res) => {
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

  app.get('/api/v2/Weight/TroyPoundToPound/:input', (req, res) => {
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

  app.get('/api/v2/Weight/TroyPoundToTroyOunce/:input', (req, res) => {
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
