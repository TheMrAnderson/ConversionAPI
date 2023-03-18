module.exports = (app) => {
  app.get('/api/v2/Capacity/BushelToCubicInch/:input', (req, res) => {
    // #swagger.tags = ['Capacity']
    try {
      const { input } = req.params;
      res.json({
        result: input * 2150.42
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Capacity/BushelToLiter/:input', (req, res) => {
    // #swagger.tags = ['Capacity']
    try {
      const { input } = req.params;
      res.json({
        result: input * 35.239
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Capacity/BushelToPeck/:input', (req, res) => {
    // #swagger.tags = ['Capacity']
    try {
      const { input } = req.params;
      res.json({
        result: input * 4
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Capacity/CubicCentimetertoCubicInch/:input', (req, res) => {
    // #swagger.tags = ['Capacity']
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.061
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Capacity/CubicDecimeterToCubicInch/:input', (req, res) => {
    // #swagger.tags = ['Capacity']
    try {
      const { input } = req.params;
      res.json({
        result: input * 61.023
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Capacity/CubicFootToCubicMeter/:input', (req, res) => {
    // #swagger.tags = ['Capacity']
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.028
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Capacity/CubicInchToCubicMeter/:input', (req, res) => {
    // #swagger.tags = ['Capacity']
    try {
      const { input } = req.params;
      res.json({
        result: input * 16.387
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Capacity/CubicInchToCubicDecimeter/:input', (req, res) => {
    // #swagger.tags = ['Capacity']
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.0164
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Capacity/CubicInchToUsGallon/:input', (req, res) => {
    // #swagger.tags = ['Capacity']
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.004329
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Capacity/CubicMeterToCubicYard/:input', (req, res) => {
    // #swagger.tags = ['Capacity']
    try {
      const { input } = req.params;
      res.json({
        result: input * 1.307
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Capacity/CubicYardToCubicMeter/:input', (req, res) => {
    // #swagger.tags = ['Capacity']
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.765
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Capacity/CupToOunce/:input', (req, res) => {
    // #swagger.tags = ['Capacity']
    try {
      const { input } = req.params;
      res.json({
        result: input * 8
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Capacity/UsGallonToCubicInch/:input', (req, res) => {
    // #swagger.tags = ['Capacity']
    try {
      const { input } = req.params;
      res.json({
        result: input * 231
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Capacity/UsGallonToLiter/:input', (req, res) => {
    // #swagger.tags = ['Capacity']
    try {
      const { input } = req.params;
      res.json({
        result: input * 3.785411784
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Capacity/UsGallonToOunce/:input', (req, res) => {
    // #swagger.tags = ['Capacity']
    try {
      const { input } = req.params;
      res.json({
        result: input * 128
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Capacity/LiterToCubicInch/:input', (req, res) => {
    // #swagger.tags = ['Capacity']
    try {
      const { input } = req.params;
      res.json({
        result: input * 61.02
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Capacity/LiterToUsGallon/:input', (req, res) => {
    // #swagger.tags = ['Capacity']
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.264172052
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Capacity/LiterToUsDryQuart/:input', (req, res) => {
    // #swagger.tags = ['Capacity']
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.908
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Capacity/LiterToUsLiquidQuart/:input', (req, res) => {
    // #swagger.tags = ['Capacity']
    try {
      const { input } = req.params;
      res.json({
        result: input * 1.05668821
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Capacity/MilliliterToOunce/:input', (req, res) => {
    // #swagger.tags = ['Capacity']
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.033814022
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Capacity/OunceToCubicCentimeter/:input', (req, res) => {
    // #swagger.tags = ['Capacity']
    try {
      const { input } = req.params;
      res.json({
        result: input * 29.57353
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Capacity/OunceToCubicInch/:input', (req, res) => {
    // #swagger.tags = ['Capacity']
    try {
      const { input } = req.params;
      res.json({
        result: input * 1.8047
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Capacity/OunceToCup/:input', (req, res) => {
    // #swagger.tags = ['Capacity']
    try {
      const { input } = req.params;
      res.json({
        result: input / 8
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Capacity/OunceToMilliliter/:input', (req, res) => {
    // #swagger.tags = ['Capacity']
    try {
      const { input } = req.params;
      res.json({
        result: input * 29.57353
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Capacity/OunceToUsGallon/:input', (req, res) => {
    // #swagger.tags = ['Capacity']
    try {
      const { input } = req.params;
      res.json({
        result: input / 128
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Capacity/OunceToPint/:input', (req, res) => {
    // #swagger.tags = ['Capacity']
    try {
      const { input } = req.params;
      res.json({
        result: input / 16
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Capacity/OunceToQuart/:input', (req, res) => {
    // #swagger.tags = ['Capacity']
    try {
      const { input } = req.params;
      res.json({
        result: input / 32
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Capacity/OunceToTablespoon/:input', (req, res) => {
    // #swagger.tags = ['Capacity']
    try {
      const { input } = req.params;
      res.json({
        result: input * 2
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Capacity/OunceToTeaspoon/:input', (req, res) => {
    // #swagger.tags = ['Capacity']
    try {
      const { input } = req.params;
      res.json({
        result: input * 6
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Capacity/TeaspoonToTablespoon/:input', (req, res) => {
    // #swagger.tags = ['Capacity']
    try {
      const { input } = req.params;
      res.json({
        result: input / 3
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Capacity/TablespoonToTeaspoon/:input', (req, res) => {
    // #swagger.tags = ['Capacity']
    try {
      const { input } = req.params;
      res.json({
        result: input * 3
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Capacity/TablespoonToOunce/:input', (req, res) => {
    // #swagger.tags = ['Capacity']
    try {
      const { input } = req.params;
      res.json({
        result: input * 2
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Capacity/TeaspoonToOunce/:input', (req, res) => {
    // #swagger.tags = ['Capacity']
    try {
      const { input } = req.params;
      res.json({
        result: input / 6
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Capacity/PeckToLiter/:input', (req, res) => {
    // #swagger.tags = ['Capacity']
    try {
      const { input } = req.params;
      res.json({
        result: input * 8.81
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Capacity/PeckToUsDryQuart/:input', (req, res) => {
    // #swagger.tags = ['Capacity']
    try {
      const { input } = req.params;
      res.json({
        result: input * 8
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Capacity/PintToCubicCentimeter/:input', (req, res) => {
    // #swagger.tags = ['Capacity']
    try {
      const { input } = req.params;
      res.json({
        result: input * 473.18
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Capacity/PintToCubicFoot/:input', (req, res) => {
    // #swagger.tags = ['Capacity']
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.01671
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Capacity/PintToCubicInch/:input', (req, res) => {
    // #swagger.tags = ['Capacity']
    try {
      const { input } = req.params;
      res.json({
        result: input * 28.875
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Capacity/PintToOunce/:input', (req, res) => {
    // #swagger.tags = ['Capacity']
    try {
      const { input } = req.params;
      res.json({
        result: input * 16
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Capacity/UsQuartToCubicInch/:input', (req, res) => {
    // #swagger.tags = ['Capacity']
    try {
      const { input } = req.params;
      res.json({
        result: input * 57.75
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Capacity/UsQuartToLiter/:input', (req, res) => {
    // #swagger.tags = ['Capacity']
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.94635246
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Capacity/UsQuartToOunce/:input', (req, res) => {
    // #swagger.tags = ['Capacity']
    try {
      const { input } = req.params;
      res.json({
        result: input * 32
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });
};
