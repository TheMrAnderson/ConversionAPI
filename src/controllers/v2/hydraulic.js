module.exports = function (app) {
  app.get('/Hydraulic/FluidHP/:pressurePsi/:pumpFlowGpm', (req, res) => {
    // #swagger.tags = ['Hydraulic']
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
  });

  app.get('/Hydraulic/MotorTorqueToInLbs/:pressurePsi/:motorDisplacementCuInPerRev', (req, res) => {
    // #swagger.tags = ['Hydraulic']
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
  });

  app.get('/Hydraulic/MotorHP/:torqueInLbs/:motorRpm', (req, res) => {
    // #swagger.tags = ['Hydraulic']
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
  });

  app.get('/Hydraulic/MotorRPM/:pumpFlowGpm/:motorDisplacementCuInPerRev', (req, res) => {
    // #swagger.tags = ['Hydraulic']
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
  });
};
