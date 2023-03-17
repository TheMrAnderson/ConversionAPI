module.exports = function (app) {
  app.get('/Length/MillimeterToInch/:input', (req, res) => {
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

  app.get('/Length/CentimeterToInch/:input', (req, res) => {
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

  app.get('/Length/FootToMillimeter/:input', (req, res) => {
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

  app.get('/Length/InchToCentimeter/:input', (req, res) => {
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

  app.get('/Length/InchToMillimeter/:input', (req, res) => {
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

  app.get('/Length/KilometerToMile/:input', (req, res) => {
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

  app.get('/Length/MeterToFoot/:input', (req, res) => {
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

  app.get('/Length/MeterToInch/:input', (req, res) => {
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

  app.get('/Length/MileToKilometer/:input', (req, res) => {
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

  app.get('/Length/MicrometerToInch/:input', (req, res) => {
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

  app.get('/Length/YardToMillimeter/:input', (req, res) => {
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

  app.get('/Length/RackUToInch/:input', (req, res) => {
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

  app.get('/Length/InchToRackU/:input', (req, res) => {
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

  app.get('/Length/InchToHand/:input', (req, res) => {
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

  app.get('/Length/HandToInch/:input', (req, res) => {
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
