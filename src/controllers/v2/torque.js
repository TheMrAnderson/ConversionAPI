module.exports = (app) => {
  app.get('/api/v2/Torque/GramCentimeterToDyneCentimeter/:input', (req, res) => {
    // #swagger.tags = ['Torque']
    try {
      const { input } = req.params;
      res.json({
        result: input * 981
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Torque/GramCentimeterToKilogramMeter/:input', (req, res) => {
    // #swagger.tags = ['Torque']
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.000001
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Torque/GramCentimeterToNewtonMeter/:input', (req, res) => {
    // #swagger.tags = ['Torque']
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.0000981
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Torque/GramCentimeterToOunceInch/:input', (req, res) => {
    // #swagger.tags = ['Torque']
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.01388736
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Torque/GramCentimeterToPoundFoot/:input', (req, res) => {
    // #swagger.tags = ['Torque']
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.0000724
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Torque/MilliNewtonMeterToOunceInch/:input', (req, res) => {
    // #swagger.tags = ['Torque']
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.141612
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Torque/NewtonCentimeterToOunceInch/:input', (req, res) => {
    // #swagger.tags = ['Torque']
    try {
      const { input } = req.params;
      res.json({
        result: input * 1.41612
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Torque/NewtonMeterToOunceInch/:input', (req, res) => {
    // #swagger.tags = ['Torque']
    try {
      const { input } = req.params;
      res.json({
        result: input * 141.612
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Torque/OunceInchToDyneCentimeter/:input', (req, res) => {
    // #swagger.tags = ['Torque']
    try {
      const { input } = req.params;
      res.json({
        result: input * 70600
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Torque/OunceInchToKilogramMeter/:input', (req, res) => {
    // #swagger.tags = ['Torque']
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.00072
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Torque/OunceInchToMilliNewtonMeter/:input', (req, res) => {
    // #swagger.tags = ['Torque']
    try {
      const { input } = req.params;
      res.json({
        result: input * 7.061548
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Torque/OunceInchToNewtonCentimeter/:input', (req, res) => {
    // #swagger.tags = ['Torque']
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.7061548
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Torque/OunceInchToNewtonMeter/:input', (req, res) => {
    // #swagger.tags = ['Torque']
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.00706
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Torque/OunceInchToPoundFoot/:input', (req, res) => {
    // #swagger.tags = ['Torque']
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.00521
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Torque/OunceInchToPoundInch/:input', (req, res) => {
    // #swagger.tags = ['Torque']
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.0625
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Torque/NewtonMeterToPoundFoot/:input', (req, res) => {
    // #swagger.tags = ['Torque']
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.7375621483695506
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Torque/PoundFootToNewtonMeter/:input', (req, res) => {
    // #swagger.tags = ['Torque']
    try {
      const { input } = req.params;
      res.json({
        result: input * 1.35581795
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });
};
