

export const lengthRoutes = [
	{
		method: 'GET',
		path: apiBasePath + 'millimeterToInch/{input}',
		handler: (request, h) => {
			return millimeterToInch(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'centimeterToInch/{input}',
		handler: (request, h) => {
			return centimeterToInch(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'footToMillimeter/{input}',
		handler: (request, h) => {
			return footToMillimeter(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'inchToCentimeter/{input}',
		handler: (request, h) => {
			return inchToCentimeter(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'inchToMiliimeter/{input}',
		handler: (request, h) => {
			return inchToMiliimeter(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'kilometerToMile/{input}',
		handler: (request, h) => {
			return kilometerToMile(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'meterToFoot/{input}',
		handler: (request, h) => {
			return meterToFoot(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'meterToInch/{input}',
		handler: (request, h) => {
			return meterToInch(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'mileToKilometer/{input}',
		handler: (request, h) => {
			return mileToKilometer(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'micrometerToInch/{input}',
		handler: (request, h) => {
			return micrometerToInch(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'yardToMillimeter/{input}',
		handler: (request, h) => {
			return yardToMillimeter(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'rackUToInch/{input}',
		handler: (request, h) => {
			return rackUToInch(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'inchToRackU/{input}',
		handler: (request, h) => {
			return inchToRackU(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'inchToHand/{input}',
		handler: (request, h) => {
			return inchToHand(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'handToInch/{input}',
		handler: (request, h) => {
			return handToInch(request.params.input)
		}
	}
]