const apiBasePath = '/api/v2/capacity/';

function bushelToInch3(input) {
  return input * 2150.42;
}

function bushelToLiter(input) {
  return input * 35.239;
}

function bushelToPeck(input) {
  return input * 4;
}

function centimeter3ToInch3(input) {
  return input * 0.061;
}

function decimeter3ToInch3(input) {
  return input * 61.023;
}

function foot3ToMeter3(input) {
  return input * 0.028;
}

function inch3ToMeter3(input) {
  return input * 16.387;
}

function inch3ToDecimeter3(input) {
  return input * 0.0164;
}

function inch3ToUsGallon(input) {
  return input * 0.004329;
}

function meter3ToYard3(input) {
  return input * 1.307;
}

function yard3ToMeter3(input) {
  return input * 0.765;
}

function cupToOunce(input) {
  return input * 8;
}

function usGallonToInch3(input) {
  return input * 231;
}

function usGallonToLiter(input) {
  return input * 3.785411784;
}

function usGallonToOunce(input) {
  return input * 128;
}

function literToInch3(input) {
  return input * 61.02;
}

function literToUsGallon(input) {
  return input * 0.264172052;
}

function literToUsQuartDry(input) {
  return input * 0.908;
}

function literToUsQuartLiquid(input) {
  return input * 1.05668821;
}

function millileterToOunce(input) {
  return input * 0.033814022;
}

function ounceToCentimeter3(input) {
  return input * 29.57353;
}

function ounceToInch3(input) {
  return input * 1.8047;
}

function ounceToCup(input) {
  return input / 8;
}

function ounceToMillileter(input) {
  return ounceToCentimeter3(input);
}

function ounceToUsGallon(input) {
  return input / 128;
}

function ounceToPint(input) {
  return input / 16;
}

function ounceToQuart(input) {
  return input / 32;
}

function ounceToTablespoon(input) {
  return input * 2;
}

function ounceToTeaspoon(input) {
  return input * 6;
}

function teaspoonToTablespoon(input) {
  return input / 3;
}

function tablespoonToTeaspoon(input) {
  return input * 3;
}

function tablespoonToOunce(input) {
  return input * 2;
}

function teaspoonToOunce(input) {
  return input / 6;
}

function peckToLiter(input) {
  return input * 8.81;
}

function peckToUsQuartDry(input) {
  return input * 8;
}

function pintToCentimeter3(input) {
  return input * 473.18;
}

function pintToFoot3(input) {
  return input * 0.01671;
}

function pintToInch3(input) {
  return input * 28.875;
}

function pintToOunce(input) {
  return input * 16;
}

function usQuartToInch3(input) {
  return input * 57.75;
}

function usQuartToLiter(input) {
  return input * 0.94635246;
}

function usQuartToOunce(input) {
  return input * 32;
}

export const capacityRoutes = [
  {
    method: 'GET',
    path: `${apiBasePath}bushelToInch3/{input}`,
    handler: (request) => bushelToInch3(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}bushelToLiter/{input}`,
    handler: (request) => bushelToLiter(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}bushelToPeck/{input}`,
    handler: (request) => bushelToPeck(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}centimeter3ToInch3/{input}`,
    handler: (request) => centimeter3ToInch3(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}decimeter3ToInch3/{input}`,
    handler: (request) => decimeter3ToInch3(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}foot3ToMeter3/{input}`,
    handler: (request) => foot3ToMeter3(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}inch3ToMeter3/{input}`,
    handler: (request) => inch3ToMeter3(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}inch3ToDecimeter3/{input}`,
    handler: (request) => inch3ToDecimeter3(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}inch3ToUsGallon/{input}`,
    handler: (request) => inch3ToUsGallon(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}meter3ToYard3/{input}`,
    handler: (request) => meter3ToYard3(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}yard3ToMeter3/{input}`,
    handler: (request) => yard3ToMeter3(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}cupToOunce/{input}`,
    handler: (request) => cupToOunce(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}usGallonToInch3/{input}`,
    handler: (request) => usGallonToInch3(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}usGallonToLiter/{input}`,
    handler: (request) => usGallonToLiter(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}usGallonToOunce/{input}`,
    handler: (request) => usGallonToOunce(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}literToInch3/{input}`,
    handler: (request) => literToInch3(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}literToUsGallon/{input}`,
    handler: (request) => literToUsGallon(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}literToUsQuartDry/{input}`,
    handler: (request) => literToUsQuartDry(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}literToUsQuartLiquid/{input}`,
    handler: (request) => literToUsQuartLiquid(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}millileterToOunce/{input}`,
    handler: (request) => millileterToOunce(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}ounceToCentimeter3/{input}`,
    handler: (request) => ounceToCentimeter3(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}ounceToInch3/{input}`,
    handler: (request) => ounceToInch3(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}ounceToCup/{input}`,
    handler: (request) => ounceToCup(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}ounceToMillileter/{input}`,
    handler: (request) => ounceToMillileter(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}ounceToUsGallon/{input}`,
    handler: (request) => ounceToUsGallon(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}ounceToPint/{input}`,
    handler: (request) => ounceToPint(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}ounceToQuart/{input}`,
    handler: (request) => ounceToQuart(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}ounceToTablespoon/{input}`,
    handler: (request) => ounceToTablespoon(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}ounceToTeaspoon/{input}`,
    handler: (request) => ounceToTeaspoon(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}teaspoonToTablespoon/{input}`,
    handler: (request) => teaspoonToTablespoon(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}tablespoonToTeaspoon/{input}`,
    handler: (request) => tablespoonToTeaspoon(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}tablespoonToOunce/{input}`,
    handler: (request) => tablespoonToOunce(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}teaspoonToOunce/{input}`,
    handler: (request) => teaspoonToOunce(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}peckToLiter/{input}`,
    handler: (request) => peckToLiter(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}peckToUsQuartDry/{input}`,
    handler: (request) => peckToUsQuartDry(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}pintToCentimeter3/{input}`,
    handler: (request) => pintToCentimeter3(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}pintToFoot3/{input}`,
    handler: (request) => pintToFoot3(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}pintToInch3/{input}`,
    handler: (request) => pintToInch3(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}pintToOunce/{input}`,
    handler: (request) => pintToOunce(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}usQuartToInch3/{input}`,
    handler: (request) => usQuartToInch3(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}usQuartToLiter/{input}`,
    handler: (request) => usQuartToLiter(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}usQuartToOunce/{input}`,
    handler: (request) => usQuartToOunce(request.params.input)
  }
];
