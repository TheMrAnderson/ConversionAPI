module.exports = function (app) {
  const millimeterToInch = (req, res) => {
    try {
      const { input } = req.params;
      res.json({
        result: input / 25.4
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  const centimeterToInch = (req, res) => {
    try {
      const { input } = req.params;
      res.json({
        result: input / 2.54
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  const footToMillimeter = (req, res) => {
    try {
      const { input } = req.params;
      res.json({
        result: input * 304.8
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  const inchToCentimeter = (req, res) => {
    try {
      const { input } = req.params;
      res.json({
        result: input * 2.54
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  const inchToMiliimeter = (req, res) => {
    try {
      const { input } = req.params;
      res.json({
        result: input * 25.4
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  const kilometerToMile = (req, res) => {
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.6214
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  const meterToFoot = (req, res) => {
    try {
      const { input } = req.params;
      res.json({
        result: input * 3.2808
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  const meterToInch = (req, res) => {
    try {
      const { input } = req.params;
      res.json({
        result: input * 39.37007874
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  const mileToKilometer = (req, res) => {
    try {
      const { input } = req.params;
      res.json({
        result: input * 1.609
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  const micrometerToInch = (req, res) => {
    try {
      const { input } = req.params;
      res.json({
        result: input * 0.000039370079
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  const yardToMillimeter = (req, res) => {
    try {
      const { input } = req.params;
      res.json({
        result: input * 914.4
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  const rackUToInch = (req, res) => {
    try {
      const { input } = req.params;
      res.json({
        result: input * 1.75
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  const inchToRackU = (req, res) => {
    try {
      const { input } = req.params;
      res.json({
        result: input / 1.75
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  const inchToHand = (req, res) => {
    try {
      const { input } = req.params;
      res.json({
        result: input / 4
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  const handToInch = (req, res) => {
    try {
      const { input } = req.params;
      res.json({
        result: input * 4
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  // export controller functions
  module.exports = {
    millimeterToInch,
    centimeterToInch,
    footToMillimeter,
    inchToCentimeter,
    inchToMiliimeter,
    kilometerToMile,
    meterToFoot,
    meterToInch,
    mileToKilometer,
    micrometerToInch,
    yardToMillimeter,
    rackUToInch,
    inchToRackU,
    inchToHand,
    handToInch
  };
};
