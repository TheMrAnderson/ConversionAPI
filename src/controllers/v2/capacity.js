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

  app.get('/api/v2/Capacity/LogToUsQuart/:input', (req, res) => {
    // #swagger.tags = ['Capacity']
    // Leviticus 14:10
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.33
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Capacity/LogToLiter/:input', (req, res) => {
    // #swagger.tags = ['Capacity']
    // Leviticus 14:10
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.31
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Capacity/HinToUsGallon/:input', (req, res) => {
    // #swagger.tags = ['Capacity']
    // Numbers 15:4
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.98
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Capacity/HinToLiter/:input', (req, res) => {
    // #swagger.tags = ['Capacity']
    // Numbers 15:4
    try {
      const { input } = req.params;
      res.json({
        result: input * 3.71
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Capacity/OldTestamentBathToUsGallon/:input', (req, res) => {
    // #swagger.tags = ['Capacity']
    // 1 Kings 5:11
    try {
      const { input } = req.params;
      res.json({
        result: input * 5.8
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Capacity/OldTestamentBathToLiter/:input', (req, res) => {
    // #swagger.tags = ['Capacity']
    // 1 Kings 5:11
    try {
      const { input } = req.params;
      res.json({
        result: input * 22
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get(['/api/v2/Capacity/LiquidHomerToUsGallon/:input', '/api/v2/Capacity/CorToUsGallon/:input'], (req, res) => {
    // #swagger.tags = ['Capacity']
    // Ezekiel 45:11
    try {
      const { input } = req.params;
      res.json({
        result: input * 58
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get(['/api/v2/Capacity/LiquidHomerToLiter/:input', '/api/v2/Capacity/CorToLiter/:input'], (req, res) => {
    // #swagger.tags = ['Capacity']
    // Ezekiel 45:11
    try {
      const { input } = req.params;
      res.json({
        result: input * 220
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Capacity/NewTestamentBathToUsGallon/:input', (req, res) => {
    // #swagger.tags = ['Capacity']
    // Luke 16:6
    try {
      const { input } = req.params;
      res.json({
        result: input * 8.7
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Capacity/NewTestamentBathToLiter/:input', (req, res) => {
    // #swagger.tags = ['Capacity']
    // Luke 16:6
    try {
      const { input } = req.params;
      res.json({
        result: input * 32.9
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Capacity/MetretesToUsGallon/:input', (req, res) => {
    // #swagger.tags = ['Capacity']
    // John 2:6
    try {
      const { input } = req.params;
      res.json({
        result: input * 10.4
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Capacity/MetretesToLiter/:input', (req, res) => {
    // #swagger.tags = ['Capacity']
    // John 2:6
    try {
      const { input } = req.params;
      res.json({
        result: input * 39.4
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Capacity/CabToDryQuart/:input', (req, res) => {
    // #swagger.tags = ['Capacity']
    // 2 Kings 6:25
    try {
      const { input } = req.params;
      res.json({
        result: input * 1.1
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Capacity/CabToLiter/:input', (req, res) => {
    // #swagger.tags = ['Capacity']
    // 2 Kings 6:25
    try {
      const { input } = req.params;
      res.json({
        result: input * 1.2
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Capacity/OmerToDryQuart/:input', (req, res) => {
    // #swagger.tags = ['Capacity']
    // Exodus 16:16
    try {
      const { input } = req.params;
      res.json({
        result: input * 2.0
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Capacity/OmerToLiter/:input', (req, res) => {
    // #swagger.tags = ['Capacity']
    // Exodus 16:16
    try {
      const { input } = req.params;
      res.json({
        result: input * 2.2
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Capacity/SeahToDryQuart/:input', (req, res) => {
    // #swagger.tags = ['Capacity']
    // Genesis 18:6
    try {
      const { input } = req.params;
      res.json({
        result: input * 6.7
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Capacity/SeahToLiter/:input', (req, res) => {
    // #swagger.tags = ['Capacity']
    // Genesis 18:6
    try {
      const { input } = req.params;
      res.json({
        result: input * 7.3
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Capacity/EphahToBushel/:input', (req, res) => {
    // #swagger.tags = ['Capacity']
    // Exodus 16:36
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.624
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Capacity/EphahToLiter/:input', (req, res) => {
    // #swagger.tags = ['Capacity']
    // Exodus 16:36
    try {
      const { input } = req.params;
      res.json({
        result: input * 22
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Capacity/LethechToBushel/:input', (req, res) => {
    // #swagger.tags = ['Capacity']
    // Hosea 3:2
    try {
      const { input } = req.params;
      res.json({
        result: input * 3.12
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Capacity/LethechToLiter/:input', (req, res) => {
    // #swagger.tags = ['Capacity']
    // Hosea 3:2
    try {
      const { input } = req.params;
      res.json({
        result: input * 110
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get(['/api/v2/Capacity/DryHomerToBushel/:input', '/api/v2/Capacity/OldTestamentCorToBushel/:input'], (req, res) => {
    // #swagger.tags = ['Capacity']
    // Leviticus 27:16, 1 Kings 4:22
    try {
      const { input } = req.params;
      res.json({
        result: input * 6.24
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get(['/api/v2/Capacity/DryHomerToLiter/:input', '/api/v2/Capacity/OldTestamentCorToLiter/:input'], (req, res) => {
    // #swagger.tags = ['Capacity']
    // Leviticus 27:16, 1 Kings 4:22
    try {
      const { input } = req.params;
      res.json({
        result: input * 220
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Capacity/NewTestamentCorToBushel/:input', (req, res) => {
    // #swagger.tags = ['Capacity']
    // Luke 16:7
    try {
      const { input } = req.params;
      res.json({
        result: input * 10
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Capacity/NewTestamentCorToLiter/:input', (req, res) => {
    // #swagger.tags = ['Capacity']
    // Luke 16:7
    try {
      const { input } = req.params;
      res.json({
        result: input * 350
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });
};
