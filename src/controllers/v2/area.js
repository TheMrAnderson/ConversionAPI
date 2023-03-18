module.exports = (app) => {
  app.get('/api/v2/Area/AcreToFoot2/:input', (req, res) => {
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

  app.get('/api/v2/Area/AcreToMile2/:input', (req, res) => {
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

  app.get('/api/v2/Area/AcreToYard2/:input', (req, res) => {
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

  app.get('/api/v2/Area/Foot2ToAcre/:input', (req, res) => {
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

  app.get('/api/v2/Area/Foot2ToInch2/:input', (req, res) => {
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

  app.get('/api/v2/Area/Inch2ToFoot2/:input', (req, res) => {
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

  app.get('/api/v2/Area/Inch2ToYard2/:input', (req, res) => {
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

  app.get('/api/v2/Area/Mile2ToAcre/:input', (req, res) => {
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

  app.get('/api/v2/Area/Rod2ToYard2/:input', (req, res) => {
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

  app.get('/api/v2/Area/Yard2ToAcre/:input', (res, req) => {
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

  app.get('/api/v2/Area/Yard2ToInch2/:input', (res, req) => {
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

  app.get('/api/v2/Area/Yard2ToRod2/:input', (res, req) => {
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

  app.get('/api/v2/Area/Circumference/:input', (res, req) => {
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
