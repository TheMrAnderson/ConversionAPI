export const capacityRoutes = [
	{
		method: 'GET',
		path: apiBasePath + 'bushelToInch3/{input}',
		handler: (request, h) => {
			return bushelToInch3(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'bushelToLiter/{input}',
		handler: (request, h) => {
			return bushelToLiter(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'bushelToPeck/{input}',
		handler: (request, h) => {
			return bushelToPeck(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'centimeter3ToInch3/{input}',
		handler: (request, h) => {
			return centimeter3ToInch3(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'decimeter3ToInch3/{input}',
		handler: (request, h) => {
			return decimeter3ToInch3(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'foot3ToMeter3/{input}',
		handler: (request, h) => {
			return foot3ToMeter3(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'inch3ToMeter3/{input}',
		handler: (request, h) => {
			return inch3ToMeter3(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'inch3ToDecimeter3/{input}',
		handler: (request, h) => {
			return inch3ToDecimeter3(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'inch3ToUsGallon/{input}',
		handler: (request, h) => {
			return inch3ToUsGallon(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'meter3ToYard3/{input}',
		handler: (request, h) => {
			return meter3ToYard3(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'yard3ToMeter3/{input}',
		handler: (request, h) => {
			return yard3ToMeter3(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'cupToOunce/{input}',
		handler: (request, h) => {
			return cupToOunce(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'usGallonToInch3/{input}',
		handler: (request, h) => {
			return usGallonToInch3(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'usGallonToLiter/{input}',
		handler: (request, h) => {
			return usGallonToLiter(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'usGallonToOunce/{input}',
		handler: (request, h) => {
			return usGallonToOunce(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'literToInch3/{input}',
		handler: (request, h) => {
			return literToInch3(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'literToUsGallon/{input}',
		handler: (request, h) => {
			return literToUsGallon(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'literToUsQuartDry/{input}',
		handler: (request, h) => {
			return literToUsQuartDry(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'literToUsQuartLiquid/{input}',
		handler: (request, h) => {
			return literToUsQuartLiquid(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'millileterToOunce/{input}',
		handler: (request, h) => {
			return millileterToOunce(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'ounceToCentimeter3/{input}',
		handler: (request, h) => {
			return ounceToCentimeter3(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'ounceToInch3/{input}',
		handler: (request, h) => {
			return ounceToInch3(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'ounceToCup/{input}',
		handler: (request, h) => {
			return ounceToCup(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'ounceToMillileter/{input}',
		handler: (request, h) => {
			return ounceToMillileter(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'ounceToUsGallon/{input}',
		handler: (request, h) => {
			return ounceToUsGallon(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'ounceToPint/{input}',
		handler: (request, h) => {
			return ounceToPint(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'ounceToQuart/{input}',
		handler: (request, h) => {
			return ounceToQuart(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'ounceToTablespoon/{input}',
		handler: (request, h) => {
			return ounceToTablespoon(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'ounceToTeaspoon/{input}',
		handler: (request, h) => {
			return ounceToTeaspoon(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'teaspoonToTablespoon/{input}',
		handler: (request, h) => {
			return teaspoonToTablespoon(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'tablespoonToTeaspoon/{input}',
		handler: (request, h) => {
			return tablespoonToTeaspoon(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'tablespoonToOunce/{input}',
		handler: (request, h) => {
			return tablespoonToOunce(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'teaspoonToOunce/{input}',
		handler: (request, h) => {
			return teaspoonToOunce(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'peckToLiter/{input}',
		handler: (request, h) => {
			return peckToLiter(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'peckToUsQuartDry/{input}',
		handler: (request, h) => {
			return peckToUsQuartDry(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'pintToCentimeter3/{input}',
		handler: (request, h) => {
			return pintToCentimeter3(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'pintToFoot3/{input}',
		handler: (request, h) => {
			return pintToFoot3(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'pintToInch3/{input}',
		handler: (request, h) => {
			return pintToInch3(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'pintToOunce/{input}',
		handler: (request, h) => {
			return pintToOunce(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'usQuartToInch3/{input}',
		handler: (request, h) => {
			return usQuartToInch3(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'usQuartToLiter/{input}',
		handler: (request, h) => {
			return usQuartToLiter(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'usQuartToOunce/{input}',
		handler: (request, h) => {
			return usQuartToOunce(request.params.input)
		}
	}
]