module.exports = function (app) {
  const gramCentimeterToDyneCentimeter = (req, res) => {
    try {
      const { input } = req.params;
      res.json({
        result: input * 981
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  const gramCentimeterToKilogramMeter = (req, res) => {
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.000001
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  const gramCentimeterToNewtonMeter = (req, res) => {
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.0000981
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  const gramCentimeterToOunceInch = (req, res) => {
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.01388736
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  const gramCentimeterToPoundFoot = (req, res) => {
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.0000724
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  const milliNewtonMeterToOunceInch = (req, res) => {
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.141612
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  const newtonCentimeterToOunceInch = (req, res) => {
    try {
      const { input } = req.params;
      res.json({
        result: input * 1.41612
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  const newtonMeterToOunceInch = (req, res) => {
    try {
      const { input } = req.params;
      res.json({
        result: input * 141.612
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  const ounceInchToDyneCentimeter = (req, res) => {
    try {
      const { input } = req.params;
      res.json({
        result: input * 70600
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  const ounceInchToKilogramMeter = (req, res) => {
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.00072
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  const ounceInchToMilliNewtonMeter = (req, res) => {
    try {
      const { input } = req.params;
      res.json({
        result: input * 7.061548
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  const ounceInchToNewtonCentimeter = (req, res) => {
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.7061548
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  const ounceInchToNewtonMeter = (req, res) => {
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.00706
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  const ounceInchToPoundFoot = (req, res) => {
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.00521
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  const ounceInchToPoundInch = (req, res) => {
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.0625
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  const newtonMeterToPoundFoot = (req, res) => {
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.7375621483695506
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  const poundFootToNewtonMeter = (req, res) => {
    try {
      const { input } = req.params;
      res.json({
        result: input * 1.35581795
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  // export controller consts
  module.exports = {
    gramCentimeterToDyneCentimeter,
    gramCentimeterToKilogramMeter,
    gramCentimeterToNewtonMeter,
    gramCentimeterToOunceInch,
    gramCentimeterToPoundFoot,
    milliNewtonMeterToOunceInch,
    newtonCentimeterToOunceInch,
    newtonMeterToOunceInch,
    ounceInchToDyneCentimeter,
    ounceInchToKilogramMeter,
    ounceInchToMilliNewtonMeter,
    ounceInchToNewtonCentimeter,
    ounceInchToNewtonMeter,
    ounceInchToPoundFoot,
    ounceInchToPoundInch,
    newtonMeterToPoundFoot,
    poundFootToNewtonMeter
  };
};
