module.exports = function (app) {
  const fluidHp = (req, res) => {
    try {
      const { pressurePsi } = req.params;
      const { pumpFlowGpm } = req.params;
      res.json({
        result: (pressurePsi * pumpFlowGpm) / 1714,
        attribution: 'https://flodraulic.com/formulae/basic-hydraulic-formulas'
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  const motorTorqueInLbs = (req, res) => {
    try {
      const { pressurePsi } = req.params;
      const { motorDisplacementCuInPerRev } = req.params;
      res.json({
        result: (pressurePsi * motorDisplacementCuInPerRev) / 6.28,
        attribution: 'https://flodraulic.com/formulae/basic-hydraulic-formulas'
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  const motorHp = (req, res) => {
    try {
      const { torqueInLbs } = req.params;
      const { motorRpm } = req.params;
      res.json({
        result: (torqueInLbs * motorRpm) / 63025,
        attribution: 'https://flodraulic.com/formulae/basic-hydraulic-formulas'
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  const motorRpm = (req, res) => {
    try {
      const { pumpFlowGpm } = req.params;
      const { motorDisplacementCuInPerRev } = req.params;
      res.json({
        result: (231 * pumpFlowGpm) / motorDisplacementCuInPerRev,
        attribution: 'https://flodraulic.com/formulae/basic-hydraulic-formulas'
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  // export controller functions
  module.exports = {
    fluidHp,
    motorTorqueInLbs,
    motorHp,
    motorRpm
  };
};
