module.exports = function (app) {
  app.get('/AcreToFoot2/:input', (req, res) => {
    // #swagger.tags = ['Area']
    try {
      const { input } = req.params;
      res.json({
        result: input * 43560
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/AcreToMile2/:input', (req, res) => {
    // #swagger.tags = ['Area']
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.0015625
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/AcreToYard2/:input', (req, res) => {
    // #swagger.tags = ['Area']
    try {
      const { input } = req.params;
      res.json({
        result: input * 4840
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/Foot2ToAcre/:input', (req, res) => {
    // #swagger.tags = ['Area']
    try {
      const { input } = req.params;
      res.json({
        result: input / 43560
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/Foot2ToInch2/:input', (req, res) => {
    // #swagger.tags = ['Area']
    try {
      const { input } = req.params;
      res.json({
        result: input * 144
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/Inch2ToFoot2/:input', (req, res) => {
    // #swagger.tags = ['Area']
    try {
      const { input } = req.params;
      res.json({
        result: input / 144
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/Inch2ToYard2/:input', (req, res) => {
    // #swagger.tags = ['Area']
    try {
      const { input } = req.params;
      res.json({
        result: input / 1296
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/Mile2ToAcre/:input', (req, res) => {
    // #swagger.tags = ['Area']
    try {
      const { input } = req.params;
      res.json({
        result: input * 640
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/Rod2ToYard2/:input', (req, res) => {
    // #swagger.tags = ['Area']
    try {
      const { input } = req.params;
      res.json({
        result: input * 30.25
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/Yard2ToAcre/:input', (res, req) => {
    // #swagger.tags = ['Area']
    try {
      const { input } = req.params;
      res.json({
        result: input / 4840
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/Yard2ToInch2/:input', (res, req) => {
    // #swagger.tags = ['Area']
    try {
      const { input } = req.params;
      res.json({
        result: input * 1296
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/Yard2ToRod2/:input', (res, req) => {
    // #swagger.tags = ['Area']
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.0330578512396694
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/Circumference/:input', (res, req) => {
    // #swagger.tags = ['Area']
    try {
      const { input } = req.params;
      res.json({
        result: input * 3.14159265359
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });
};
