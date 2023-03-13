'use strict'

const apiBasePath = '/api/v2/Temperature/'

export function celciusToFehrenheit(input) {
	return (input * 1.8) + 32
}


export function fehrenheitToCelcius(input) {
	return (input - 32) * 0.555555555556
}

export const temperatureRoutes = [
	{
		method: 'GET',
		path: apiBasePath + 'celciusToFehrenheit/{input}',
		handler: (request, h) => {
			return celciusToFehrenheit(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'fehrenheitToCelcius/{input}',
		handler: (request, h) => {
			return fehrenheitToCelcius(request.params.input)
		}
	}
]