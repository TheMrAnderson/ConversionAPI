

export const torqueRoutes = [
	{
		method: 'GET',
		path: apiBasePath + 'GramCentimeterToDyneCentimeter/{input}',
		handler: (request, h) => {
			return gramCentimeterToDyneCentimeter(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'GramCentimeterToKilogramMeter/{input}',
		handler: (request, h) => {
			return gramCentimeterToKilogramMeter(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'GramCentimeterToNewtonMeter/{input}',
		handler: (request, h) => {
			return gramCentimeterToNewtonMeter(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'GramCentimeterToOunceInch/{input}',
		handler: (request, h) => {
			return gramCentimeterToOunceInch(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'GramCentimeterToPoundFoot/{input}',
		handler: (request, h) => {
			return gramCentimeterToPoundFoot(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'MilliNewtonMeterToOunceInch/{input}',
		handler: (request, h) => {
			return milliNewtonMeterToOunceInch(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'NewtonCentimeterToOunceInch/{input}',
		handler: (request, h) => {
			return newtonCentimeterToOunceInch(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'NewtonMeterToOunceInch/{input}',
		handler: (request, h) => {
			return newtonMeterToOunceInch(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'OunceInchToDyneCentimeter/{input}',
		handler: (request, h) => {
			return ounceInchToDyneCentimeter(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'OunceInchToKilogramMeter/{input}',
		handler: (request, h) => {
			return ounceInchToKilogramMeter(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'OunceInchToMilliNewtonMeter/{input}',
		handler: (request, h) => {
			return ounceInchToMilliNewtonMeter(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'OunceInchToNewtonCentimeter/{input}',
		handler: (request, h) => {
			return ounceInchToNewtonCentimeter(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'OunceInchToNewtonMeter/{input}',
		handler: (request, h) => {
			return ounceInchToNewtonMeter(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'OunceInchToPoundFoot/{input}',
		handler: (request, h) => {
			return ounceInchToPoundFoot(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'OunceInchToPoundInch/{input}',
		handler: (request, h) => {
			return ounceInchToPoundInch(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'NewtonMeterToPoundFoot/{input}',
		handler: (request, h) => {
			return newtonMeterToPoundFoot(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'poundFootToNewtonMeter/{input}',
		handler: (request, h) => {
			return poundFootToNewtonMeter(request.params.input)
		}
	}
]