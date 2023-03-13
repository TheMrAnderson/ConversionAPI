const fuelCostForRuntime = (req, res) => {
  try {
    const { numberHoursToRun } = req.params;
    const { fuelPricePerUnit } = req.params;
    const { burnRateUPH } = req.params;
    const fuelCostForHours = numberHoursToRun * fuelPricePerUnit * burnRateUPH;
    const hourlyFuelCost = fuelPricePerUnit * burnRateUPH;
    res.json({
      result: fuelCostForHours,
      hourlyFuelCost
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

const fuelTankRuntime = (req, res) => {
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
};

// export controller functions
module.exports = {
  fuelCostForRuntime,
  fuelTankRuntime
};
