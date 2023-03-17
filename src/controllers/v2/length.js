module.exports = function (app) {
  app.get('/MillimeterToInch/:input', (req, res) => {
    // #swagger.tags = ['Length']
    try {
      const { input } = req.params;
      res.json({
        result: input / 25.4
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/CentimeterToInch/:input', (req, res) => {
    // #swagger.tags = ['Length']
    try {
      const { input } = req.params;
      res.json({
        result: input / 2.54
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/FootToMillimeter/:input', (req, res) => {
    // #swagger.tags = ['Length']
    try {
      const { input } = req.params;
      res.json({
        result: input * 304.8
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/InchToCentimeter/:input', (req, res) => {
    // #swagger.tags = ['Length']
    try {
      const { input } = req.params;
      res.json({
        result: input * 2.54
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/InchToMillimeter/:input', (req, res) => {
    // #swagger.tags = ['Length']
    try {
      const { input } = req.params;
      res.json({
        result: input * 25.4
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/KilometerToMile/:input', (req, res) => {
    // #swagger.tags = ['Length']
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.6214
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/MeterToFoot/:input', (req, res) => {
    // #swagger.tags = ['Length']
    try {
      const { input } = req.params;
      res.json({
        result: input * 3.2808
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/MeterToInch/:input', (req, res) => {
    // #swagger.tags = ['Length']
    try {
      const { input } = req.params;
      res.json({
        result: input * 39.37007874
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/MileToKilometer/:input', (req, res) => {
    // #swagger.tags = ['Length']
    try {
      const { input } = req.params;
      res.json({
        result: input * 1.609
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/MicrometerToInch/:input', (req, res) => {
    // #swagger.tags = ['Length']
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.000039370079
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/YardToMillimeter/:input', (req, res) => {
    // #swagger.tags = ['Length']
    try {
      const { input } = req.params;
      res.json({
        result: input * 914.4
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/RackUToInch/:input', (req, res) => {
    // #swagger.tags = ['Length']
    try {
      const { input } = req.params;
      res.json({
        result: input * 1.75
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/InchToRackU/:input', (req, res) => {
    // #swagger.tags = ['Length']
    try {
      const { input } = req.params;
      res.json({
        result: input / 1.75
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/InchToHand/:input', (req, res) => {
    // #swagger.tags = ['Length']
    try {
      const { input } = req.params;
      res.json({
        result: input / 4
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/HandToInch/:input', (req, res) => {
    // #swagger.tags = ['Length']
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
