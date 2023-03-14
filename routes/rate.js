const apiBasePath = '/api/v2/rate/';

function getFuelCostForRuntime(numberHoursToRun, fuelPricePerGallon, burnRateGPH) {
  const fuelCostForHours = numberHoursToRun * fuelPricePerGallon * burnRateGPH;
  const hourlyFuelCost = fuelPricePerGallon * burnRateGPH;
  const obj = { FuelCostForHours: fuelCostForHours, HourlyFuelCost: hourlyFuelCost };
  return JSON.stringify(obj);
}

function getFuelTankRuntime(burnRateGPH, fuelTankCapacity) {
  return fuelTankCapacity / burnRateGPH;
}

export const rateRoutes = [
  {
    method: 'GET',
    path: `${apiBasePath}getFuelCostForRuntime/{numberHoursToRun}/{fuelPricePerGallon}/{burnRateGPH}`,
    handler: (request) => getFuelCostForRuntime(
      request.params.numberHoursToRun,
      request.params.fuelPricePerGallon,
      request.params.burnRateGPH
    ),
    method: 'GET',
    path: `${apiBasePath}getFuelTankRuntime/{burnRateGPH}/{fuelTankCapacity}`,
    handler: (request) => getFuelTankRuntime(
      request.params.burnRateGPH,
      request.params.fuelTankCapacity
    )
  }
];
