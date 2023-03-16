module.exports = function (app) {
  const mphToKnots = (req, res) => {
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.8689758
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  const knotsToMph = (req, res) => {
    try {
      const { input } = req.params;
      res.json({
        result: input * 1.15078
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  const knotsToMach = (req, res) => {
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.0015117824339371
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  const mphToMach = (req, res) => {
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.001303
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  // export controller functions
  module.exports = {
    mphToKnots,
    knotsToMph,
    knotsToMach,
    mphToMach
  };
};
