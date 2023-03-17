module.exports = function (app) {
  app.get('/GramCentimeterToDyneCentimeter/:input', (req, res) => {
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

  app.get('/GramCentimeterToKilogramMeter/:input', (req, res) => {
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

  app.get('/GramCentimeterToNewtonMeter/:input', (req, res) => {
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

  app.get('/GramCentimeterToOunceInch/:input', (req, res) => {
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

  app.get('/GramCentimeterToPoundFoot/:input', (req, res) => {
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

  app.get('/MilliNewtonMeterToOunceInch/:input', (req, res) => {
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

  app.get('/NewtonCentimeterToOunceInch/:input', (req, res) => {
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

  app.get('/NewtonMeterToOunceInch/:input', (req, res) => {
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

  app.get('/OunceInchToDyneCentimeter/:input', (req, res) => {
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

  app.get('/OunceInchToKilogramMeter/:input', (req, res) => {
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

  app.get('/OunceInchToMilliNewtonMeter/:input', (req, res) => {
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

  app.get('/OunceInchToNewtonCentimeter/:input', (req, res) => {
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

  app.get('/OunceInchToNewtonMeter/:input', (req, res) => {
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

  app.get('/OunceInchToPoundFoot/:input', (req, res) => {
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

  app.get('/OunceInchToPoundInch/:input', (req, res) => {
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

  app.get('/NewtonMeterToPoundFoot/:input', (req, res) => {
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

  app.get('/PoundFootToNewtonMeter/:input', (req, res) => {
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
