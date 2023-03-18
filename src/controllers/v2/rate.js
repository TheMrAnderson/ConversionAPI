module.exports = (app) => {
  app.get('/api/v2/Rate/FuelCostForRuntime/:numberHoursToRun/:fuelPricePerUnit/:burnRateUPH', (req, res) => {
    // #swagger.tags = ['Rate']
    // #swagger.description = Calculate fuel cost for the desired runtime
    /* #swagger.parameters['numberHoursToRun'] = {
            in: 'path',
            description: 'Number of hours desired to run' ,
            type: 'number'
    } */
    /* #swagger.parameters['fuelPricePerUnit'] = {
            in: 'path',
            description: 'Price of fuel per unit whether gallon or liter, but the unit used here
             is the same unit used in the burnRateUPH',
            type: 'number'
    } */
    /* #swagger.parameters['burnRateUPH'] = {
            in: 'path',
            description: 'Fuel burn rate in your preferred units per hour(gallons, liters, etc.)
             as long as the units matches the fuelPricePerUnit',
            type: 'number'
    } */
    try {
      const { numberHoursToRun } = req.params;
      const { fuelPricePerUnit } = req.params;
      const { burnRateUPH } = req.params;
      const fuelCostForHours = numberHoursToRun * fuelPricePerUnit * burnRateUPH;
      const hourlyFuelCost = fuelPricePerUnit * burnRateUPH;
      res.json({
        fuelCostForHours,
        hourlyFuelCost
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Rate/FuelTankRuntime/:burnRateUPH/:fuelTankCapacity', (req, res) => {
    // #swagger.tags = ['Rate']
    // #swagger.description = Calculate runtime for the fuel tank
    /* #swagger.parameters['burnRateUPH'] = {
            in: 'path',
            description: 'Fuel burn rate in your preferred units per hour(gallons, liters, etc.)
             as long as the units matches the fuelTankCapacity',
            type: 'number'
    } */
    /* #swagger.parameters['fuelTankCapacity'] = {
            in: 'path',
            description: 'Fuel tank capacity in a unit matching the burnRateUPH' ,
            type: 'number'
    } */
    try {
      const { burnRateUPH } = req.params;
      const { fuelTankCapacity } = req.params;
      const runtimeHrs = fuelTankCapacity / burnRateUPH;
      res.json({
        runtimeHours: runtimeHrs,
        runtimeMinutes: runtimeHrs * 60
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });
};
