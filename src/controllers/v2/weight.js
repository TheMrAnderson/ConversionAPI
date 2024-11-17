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

  app.get('/api/v2/Weight/GerahToOunce/:input', (req, res) => {
    // #swagger.tags = ['Weight']
    // Exodus 30:13
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.0201
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Weight/GerahToGram/:input', (req, res) => {
    // #swagger.tags = ['Weight']
    // Exodus 30:13
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.57
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Weight/BekaToOunce/:input', (req, res) => {
    // #swagger.tags = ['Weight']
    // Genesis 24:22
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.201
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Weight/BekaToGram/:input', (req, res) => {
    // #swagger.tags = ['Weight']
    // Genesis 24:22
    try {
      const { input } = req.params;
      res.json({
        result: input * 5.7
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Weight/PimToOunce/:input', (req, res) => {
    // #swagger.tags = ['Weight']
    // 1 Samuel 13:21
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.268
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Weight/PimToGram/:input', (req, res) => {
    // #swagger.tags = ['Weight']
    // 1 Samuel 13:21
    try {
      const { input } = req.params;
      res.json({
        result: input * 7.6
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Weight/ShekelToOunce/:input', (req, res) => {
    // #swagger.tags = ['Weight']
    // Genesis 23:15
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.402
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Weight/ShekelToGram/:input', (req, res) => {
    // #swagger.tags = ['Weight']
    // Genesis 23:15
    try {
      const { input } = req.params;
      res.json({
        result: input * 11.4
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Weight/MinaToUsPound/:input', (req, res) => {
    // #swagger.tags = ['Weight']
    // Ezra 2:69
    try {
      const { input } = req.params;
      res.json({
        result: input * 1.256
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Weight/MinaToKilogram/:input', (req, res) => {
    // #swagger.tags = ['Weight']
    // Ezra 2:69
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.57
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Weight/TalentToUsPound/:input', (req, res) => {
    // #swagger.tags = ['Weight']
    // Exodus 25:39
    try {
      const { input } = req.params;
      res.json({
        result: input * 75.4
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Weight/TalentToKilogram/:input', (req, res) => {
    // #swagger.tags = ['Weight']
    // Exodus 25:39
    try {
      const { input } = req.params;
      res.json({
        result: input * 34.2
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Weight/LitraToOunce/:input', (req, res) => {
    // #swagger.tags = ['Weight']
    // John 19:39
    try {
      const { input } = req.params;
      res.json({
        result: input * 12
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Weight/LitraToGram/:input', (req, res) => {
    // #swagger.tags = ['Weight']
    // John 19:39
    try {
      const { input } = req.params;
      res.json({
        result: input * 340
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });
};
