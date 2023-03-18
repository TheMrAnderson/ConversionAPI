module.exports = (app) => {
  app.get('/api/v2/Distance/MillimeterToInch/:input', (req, res) => {
    // #swagger.tags = ['Distance']
    try {
      const { input } = req.params;
      res.json({
        result: input / 25.4
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Distance/CentimeterToInch/:input', (req, res) => {
    // #swagger.tags = ['Distance']
    try {
      const { input } = req.params;
      res.json({
        result: input / 2.54
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Distance/FootToMillimeter/:input', (req, res) => {
    // #swagger.tags = ['Distance']
    try {
      const { input } = req.params;
      res.json({
        result: input * 304.8
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Distance/InchToCentimeter/:input', (req, res) => {
    // #swagger.tags = ['Distance']
    try {
      const { input } = req.params;
      res.json({
        result: input * 2.54
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Distance/InchToMillimeter/:input', (req, res) => {
    // #swagger.tags = ['Distance']
    try {
      const { input } = req.params;
      res.json({
        result: input * 25.4
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Distance/KilometerToMile/:input', (req, res) => {
    // #swagger.tags = ['Distance']
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.6214
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Distance/MeterToFoot/:input', (req, res) => {
    // #swagger.tags = ['Distance']
    try {
      const { input } = req.params;
      res.json({
        result: input * 3.2808
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Distance/MeterToInch/:input', (req, res) => {
    // #swagger.tags = ['Distance']
    try {
      const { input } = req.params;
      res.json({
        result: input * 39.37007874
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Distance/MileToKilometer/:input', (req, res) => {
    // #swagger.tags = ['Distance']
    try {
      const { input } = req.params;
      res.json({
        result: input * 1.609
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Distance/MicrometerToInch/:input', (req, res) => {
    // #swagger.tags = ['Distance']
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.000039370079
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Distance/YardToMillimeter/:input', (req, res) => {
    // #swagger.tags = ['Distance']
    try {
      const { input } = req.params;
      res.json({
        result: input * 914.4
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Distance/RackUToInch/:input', (req, res) => {
    // #swagger.tags = ['Distance']
    try {
      const { input } = req.params;
      res.json({
        result: input * 1.75
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Distance/InchToRackU/:input', (req, res) => {
    // #swagger.tags = ['Distance']
    try {
      const { input } = req.params;
      res.json({
        result: input / 1.75
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Distance/InchToHand/:input', (req, res) => {
    // #swagger.tags = ['Distance']
    try {
      const { input } = req.params;
      res.json({
        result: input / 4
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Distance/HandToInch/:input', (req, res) => {
    // #swagger.tags = ['Distance']
    try {
      const { input } = req.params;
      res.json({
        result: input * 4
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });
};
