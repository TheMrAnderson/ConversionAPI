module.exports = function (app) {
  const caratToGram = (req, res) => {
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.2
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  const grainToGram = (req, res) => {
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.0648
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  const grainToOunce = (req, res) => {
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.002285714
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  const grainToTroyPennyweight = (req, res) => {
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.04167
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  const gramToGrain = (req, res) => {
    try {
      const { input } = req.params;
      res.json({
        result: input * 15.4321
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  const gramToOunce = (req, res) => {
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.035273962
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  const gramToPound = (req, res) => {
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.002204622622
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  const kilogramToPound = (req, res) => {
    try {
      const { input } = req.params;
      res.json({
        result: input * 2.204622622
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  const ounceToGrain = (req, res) => {
    try {
      const { input } = req.params;
      res.json({
        result: input * 437.5
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  const ounceToGram = (req, res) => {
    try {
      const { input } = req.params;
      res.json({
        result: input * 28.349527
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  const ounceToTroyOunce = (req, res) => {
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.9114583
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  const pointToCarat = (req, res) => {
    try {
      const { input } = req.params;
      res.json({
        result: input / 100
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  const pointToGram = (req, res) => {
    try {
      const { input } = req.params;
      res.json({
        result: input / 500
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  const poundToGram = (req, res) => {
    try {
      const { input } = req.params;
      res.json({
        result: input * 453.59237
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  const poundToOunce = (req, res) => {
    try {
      const { input } = req.params;
      res.json({
        result: input * 16
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  const poundToTroyPound = (req, res) => {
    try {
      const { input } = req.params;
      res.json({
        result: input * 1.21528
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  const troyGrainToGrain = (req, res) => {
    try {
      const { input } = req.params;
      res.json({
        result: input
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  const troyPennyweightToGrain = (req, res) => {
    try {
      const { input } = req.params;
      res.json({
        result: input * 24
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  const troyPennyweightToTroyOunce = (req, res) => {
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.05
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  const troyPoundToPound = (req, res) => {
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.822857
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  const troyPoundToTroyOunce = (req, res) => {
    try {
      const { input } = req.params;
      res.json({
        result: input * 12
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  // export controller consts
  module.exports = {
    caratToGram,
    grainToGram,
    grainToOunce,
    grainToTroyPennyweight,
    gramToGrain,
    gramToOunce,
    gramToPound,
    kilogramToPound,
    ounceToGrain,
    ounceToGram,
    ounceToTroyOunce,
    pointToCarat,
    pointToGram,
    poundToGram,
    poundToOunce,
    poundToTroyPound,
    troyGrainToGrain,
    troyPennyweightToGrain,
    troyPennyweightToTroyOunce,
    troyPoundToPound,
    troyPoundToTroyOunce
  };
};
