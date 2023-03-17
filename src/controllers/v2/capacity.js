module.exports = function (app) {
  app.get('/BushelToCubicInch/:input', (req, res) => {
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

  app.get('/BushelToLiter/:input', (req, res) => {
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

  app.get('/BushelToPeck/:input', (req, res) => {
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

  app.get('/CubicCentimetertoCubicInch/:input', (req, res) => {
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

  app.get('/CubicDecimeterToCubicInch/:input', (req, res) => {
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

  app.get('/CubicFootToCubicMeter/:input', (req, res) => {
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

  app.get('/CubicInchToCubicMeter/:input', (req, res) => {
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

  app.get('/CubicInchToCubicDecimeter/:input', (req, res) => {
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

  app.get('/CubicInchToUsGallon/:input', (req, res) => {
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

  app.get('/CubicMeterToCubicYard/:input', (req, res) => {
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

  app.get('/CubicYardToCubicMeter/:input', (req, res) => {
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

  app.get('/CupToOunce/:input', (req, res) => {
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

  app.get('/UsGallonToCubicInch/:input', (req, res) => {
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

  app.get('/UsGallonToLiter/:input', (req, res) => {
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

  app.get('/UsGallonToOunce/:input', (req, res) => {
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

  app.get('/LiterToCubicInch/:input', (req, res) => {
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

  app.get('/LiterToUsGallon/:input', (req, res) => {
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

  app.get('/LiterToUsDryQuart/:input', (req, res) => {
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

  app.get('/LiterToUsLiquidQuart/:input', (req, res) => {
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

  app.get('/MilliliterToOunce/:input', (req, res) => {
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

  app.get('/OunceToCubicCentimeter/:input', (req, res) => {
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

  app.get('/OunceToCubicInch/:input', (req, res) => {
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

  app.get('/OunceToCup/:input', (req, res) => {
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

  app.get('/OunceToMilliliter/:input', (req, res) => {
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

  app.get('/OunceToUsGallon/:input', (req, res) => {
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

  app.get('/OunceToPint/:input', (req, res) => {
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

  app.get('/OunceToQuart/:input', (req, res) => {
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

  app.get('/OunceToTablespoon/:input', (req, res) => {
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

  app.get('/OunceToTeaspoon/:input', (req, res) => {
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

  app.get('/TeaspoonToTablespoon/:input', (req, res) => {
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

  app.get('/TablespoonToTeaspoon/:input', (req, res) => {
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

  app.get('/TablespoonToOunce/:input', (req, res) => {
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

  app.get('/TeaspoonToOunce/:input', (req, res) => {
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

  app.get('/PeckToLiter/:input', (req, res) => {
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

  app.get('/PeckToUsDryQuart/:input', (req, res) => {
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

  app.get('/PintToCubicCentimeter/:input', (req, res) => {
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

  app.get('/PintToCubicFoot/:input', (req, res) => {
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

  app.get('/PintToCubicInch/:input', (req, res) => {
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

  app.get('/PintToOunce/:input', (req, res) => {
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

  app.get('/UsQuartToCubicInch/:input', (req, res) => {
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

  app.get('/UsQuartToLiter/:input', (req, res) => {
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

  app.get('/UsQuartToOunce/:input', (req, res) => {
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
