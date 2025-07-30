module.exports = (app) => {
  app.get('/api/v2/Diving/AbsolutePressureAtDepth/Imperial/:feetSeaWater', (req, res) => {
    const { feetSeaWater } = req.params;
    res.json({
        result: (feetSeaWater + 33) / 33
    })
  })

  app.get('/api/v2/Diving/AbsolutePressureAtDepth/Metric/:metersSeaWater', (req, res) => {
    const { metersSeaWater } = req.params;
    res.json({
        result: (metersSeaWater + 10) / 10
    })
  })

  app.get('/api/v2/Diving/PartialPressureOfO2AtDepth/Imperial/:feetSeaWater/:fO2', (req,res) => {
    const { feetSeaWater } = req.params;
    const { fO2 } = req.params;
    res.json({
        result: ((feetSeaWater / 33) + 1) * fO2
    })
  })

  app.get('/api/v2/Diving/MaximumOperatingDepth/Imperial/:ppO2/:fO2', (req, res) => {
    const { ppO2 } = req.params;
    const { fO2 } = req.params;
    res.json({
        result: ((ppO2 / fO2) - 1) * 33
    })
  })

  app.get('/api/v2/Diving/BestFO2Mix/Imperial/:feetSeaWater/:ppO2', (req, res) => {
    const { feetSeaWater } = req.params;
    const { ppO2 } = req.params;
    res.json({
        result: (ppO2 / ((feetSeaWater / 33) + 1))
    })
  })

  app.get('/api/v2/Diving/EquivalentAirDepth/Imperial/:feetSeaWater/:n2/:fn2', (req, res) => {
    const { feetSeaWater } = req.params;
    const { n2 } = req.params;
    const { fn2 } = req.params;
    res.json({
        result: (((feetSeaWater + 33) * n2)/ fn2) - 33
    })
  })
};
