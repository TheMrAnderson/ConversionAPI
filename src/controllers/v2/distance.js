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

  app.get('api/v2/Distance/FingerToInch/:input', (req, res) => {
    // #swagger.tags = ['Distance']
    // Jeremiah 52:21
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.73
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('api/v2/Distance/FingerToCentimeter/:input', (req, res) => {
    // #swagger.tags = ['Distance']
    // Jeremiah 52:21
    try {
      const { input } = req.params;
      res.json({
        result: input * 1.85
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('api/v2/Distance/HandbreadthToInch/:input', (req, res) => {
    // #swagger.tags = ['Distance']
    // Exodus 25:25
    try {
      const { input } = req.params;
      res.json({
        result: input * 2.92
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('api/v2/Distance/HandbreadthToCentimeter/:input', (req, res) => {
    // #swagger.tags = ['Distance']
    // Exodus 25:25
    try {
      const { input } = req.params;
      res.json({
        result: input * 7.42
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('api/v2/Distance/SpanToInch/:input', (req, res) => {
    // #swagger.tags = ['Distance']
    // Exodus 28:16
    try {
      const { input } = req.params;
      res.json({
        result: input * 9
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('api/v2/Distance/SpanToCentimeter/:input', (req, res) => {
    // #swagger.tags = ['Distance']
    // Exodus 28:16
    try {
      const { input } = req.params;
      res.json({
        result: input * 22.86
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('api/v2/Distance/CubitToInch/:input', (req, res) => {
    // #swagger.tags = ['Distance']
    // Genesis 6:15
    try {
      const { input } = req.params;
      res.json({
        result: input * 18
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('api/v2/Distance/CubitToCentimeter/:input', (req, res) => {
    // #swagger.tags = ['Distance']
    // Genesis 6:15
    try {
      const { input } = req.params;
      res.json({
        result: input * 45.72
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('api/v2/Distance/LongCubitToInch/:input', (req, res) => {
    // #swagger.tags = ['Distance']
    // Ezekiel 40:5
    try {
      const { input } = req.params;
      res.json({
        result: input * 21
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('api/v2/Distance/LongCubitToCentimeter/:input', (req, res) => {
    // #swagger.tags = ['Distance']
    // Ezekiel 40:5
    try {
      const { input } = req.params;
      res.json({
        result: input * 53.34
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('api/v2/Distance/RodToFeet/:input', (req, res) => {
    // #swagger.tags = ['Distance']
    // Ezekiel 40:5
    try {
      const { input } = req.params;
      res.json({
        result: input * 10.5
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('api/v2/Distance/RodToMeter/:input', (req, res) => {
    // #swagger.tags = ['Distance']
    // Ezekiel 40:5
    try {
      const { input } = req.params;
      res.json({
        result: input * 3.20
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('api/v2/Distance/FathomToFeet/:input', (req, res) => {
    // #swagger.tags = ['Distance']
    // Acts 27:28
    try {
      const { input } = req.params;
      res.json({
        result: input * 6
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('api/v2/Distance/FathomToMeter/:input', (req, res) => {
    // #swagger.tags = ['Distance']
    // Acts 27:28
    try {
      const { input } = req.params;
      res.json({
        result: input * 1.829
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('api/v2/Distance/FurlongToFeet/:input', (req, res) => {
    // #swagger.tags = ['Distance']
    // Revelation 14:20
    try {
      const { input } = req.params;
      res.json({
        result: input * 660
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('api/v2/Distance/FurlongToMeter/:input', (req, res) => {
    // #swagger.tags = ['Distance']
    // Revelation 14:20
    try {
      const { input } = req.params;
      res.json({
        result: input * 201.168
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('api/v2/Distance/StadionToFeet/:input', (req, res) => {
    // #swagger.tags = ['Distance']
    // Luke 24:13
    try {
      const { input } = req.params;
      res.json({
        result: input * 607
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('api/v2/Distance/StadionToMeter/:input', (req, res) => {
    // #swagger.tags = ['Distance']
    // Luke 24:13
    try {
      const { input } = req.params;
      res.json({
        result: input * 185
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });
};
