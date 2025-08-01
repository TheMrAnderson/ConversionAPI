function absolutePressureAtDepthImperial(feetSeaWater) {
  return ((feetSeaWater / 33) + 1);
}

function absolutePressureAtDepthMetric(metersSeaWater) {
  return ((metersSeaWater / 10) + 1);
}

module.exports = (app) => {
  app.get('/api/v2/Diving/AbsolutePressureAtDepth/Imperial/:feetSeaWater', (req, res) => {
    // #swagger.tags = ['Diving']
    const { feetSeaWater } = req.params;
    res.json({
        result: absolutePressureAtDepthImperial(feetSeaWater).toFixed(2)
    })
  })

  app.get('/api/v2/Diving/AbsolutePressureAtDepth/Metric/:metersSeaWater', (req, res) => {
    // #swagger.tags = ['Diving']
    const { metersSeaWater } = req.params;
    res.json({
      result: absolutePressureAtDepthMetric(metersSeaWater).toFixed(2)
    })
  })

  app.get('/api/v2/Diving/PartialPressureOfO2AtDepth/Imperial/:feetSeaWater/:fO2', (req,res) => {
    // #swagger.tags = ['Diving']
    const { feetSeaWater } = req.params;
    const { fO2 } = req.params;
    res.json({
      result: (absolutePressureAtDepthImperial(feetSeaWater) * fO2).toFixed(2)
    })
  })

  app.get('/api/v2/Diving/PartialPressureOfO2AtDepth/Metric/:metersSeaWater/:fO2', (req, res) => {
    // #swagger.tags = ['Diving']
    const { metersSeaWater } = req.params;
    const { fO2 } = req.params;
    res.json({
      result: (absolutePressureAtDepthMetric(metersSeaWater) * fO2).toFixed(2)
    })
  })

  app.get('/api/v2/Diving/MaximumOperatingDepth/Imperial/:ppO2/:fO2', (req, res) => {
    // #swagger.tags = ['Diving']
    const { ppO2 } = req.params;
    const { fO2 } = req.params;
    res.json({
      result: (((ppO2 / fO2) - 1) * 33).toFixed(2)
    })
  })

  app.get('/api/v2/Diving/MaximumOperatingDepth/Metric/:ppO2/:fO2', (req, res) => {
    // #swagger.tags = ['Diving']
    const { ppO2 } = req.params;
    const { fO2 } = req.params;
    res.json({
      result: (((ppO2 / fO2) - 1) * 10).toFixed(2)
    })
  })

  app.get('/api/v2/Diving/BestFO2Mix/Imperial/:feetSeaWater/:ppO2', (req, res) => {
    // #swagger.tags = ['Diving']
    const { feetSeaWater } = req.params;
    const { ppO2 } = req.params;
    res.json({
      result: (ppO2 / (absolutePressureAtDepthImperial(feetSeaWater))).toFixed(2)
    })
  })

  app.get('/api/v2/Diving/BestFO2Mix/Metric/:metersSeaWater/:ppO2', (req, res) => {
    // #swagger.tags = ['Diving']
    const { metersSeaWater } = req.params;
    const { ppO2 } = req.params;
    res.json({
      result: (ppO2 / (absolutePressureAtDepthMetric(metersSeaWater))).toFixed(2)
    })
  })

  app.get('/api/v2/Diving/EquivalentAirDepth/Imperial/:feetSeaWater/:n2/:fn2', (req, res) => {
    // #swagger.tags = ['Diving']
    const { feetSeaWater } = req.params;
    const { n2 } = req.params;
    const { fn2 } = req.params;
    res.json({
      result: ((((feetSeaWater + 33) * n2) / fn2) - 33).toFixed(2)
    })
  })

  app.get('/api/v2/Diving/EquivalentAirDepth/Metric/:metersSeaWater/:n2/:fn2', (req, res) => {
    // #swagger.tags = ['Diving']
    const { metersSeaWater } = req.params;
    const { n2 } = req.params;
    const { fn2 } = req.params;
    res.json({
      result: ((((metersSeaWater + 10) * n2) / fn2) - 10).toFixed(2)
    })
  })
};
