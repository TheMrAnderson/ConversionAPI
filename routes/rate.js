'use strict'

const apiBasePath = '/api/v2/rate/'

function getFuelCostForRuntime(numberHoursToRun, fuelPricePerGallon, burnRateGPH) {
	let fuelCostForHours = numberHoursToRun * fuelPricePerGallon * burnRateGPH
	let hourlyFuelCost = fuelPricePerGallon * burnRateGPH
	let obj = {"FuelCostForHours": fuelCostForHours, "HourlyFuelCost": hourlyFuelCost}
	return JSON.stringify(obj)
}

function getFuelTankRuntime(burnRateGPH, fuelTankCapacity) {
	return fuelTankCapacity / burnRateGPH
}

export const rateRoutes = [
{
		method: 'GET',
		path: apiBasePath + 'getFuelCostForRuntime/{numberHoursToRun}/{fuelPricePerGallon}/{burnRateGPH}',
		handler: (request, h) => {
			return getFuelCostForRuntime(
				request.params.numberHoursToRun,
				request.params.fuelPricePerGallon,
				request.params.burnRateGPH)
		},
		method: 'GET',
		path: apiBasePath + 'getFuelTankRuntime/{burnRateGPH}/{fuelTankCapacity}',
		handler: (request, h) => {
			return getFuelTankRuntime(
				request.params.burnRateGPH,
				request.params.fuelTankCapacity)
		}
	}
]