const apiBasePath = '/api/v2/Revolutions/';

function revsPerMilePerMillimeter(circumference) {
  // Convert a mile to mm, then gets revs per mile
  // Mile = 1609344 mm
  return 1609344 / circumference;
}

function revsPerMilePerInch(circumference) {
  // Convert a mile to inches, then gets revs per mile
  // Mile = 63360 in
  return 63360 / circumference;
}

function revsPerKilometerPerMillimeter(circumference) {
  // Convert a KM to MM, then get revs per KM
  // KM = 1, 000, 000 MM
  return 1000000 / circumference;
}

function revsPerKilometerPerInch(circumference) {
  // Convert a KM to inches, then get revs per KM
  // KM = 39370.0787 Inches
  return 39370.0787 / circumference;
}

export const revolutionsRoutes = [
  {
    method: 'GET',
    path: `${apiBasePath}revsPerMilePerMillimeter/{input}`,
    handler: (request) => revsPerMilePerMillimeter(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}revsPerMilePerInch/{input}`,
    handler: (request) => revsPerMilePerInch(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}revsPerKilometerPerMillimeter/{input}`,
    handler: (request) => revsPerKilometerPerMillimeter(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}revsPerKilometerPerInch/{input}`,
    handler: (request) => revsPerKilometerPerInch(request.params.input)
  }
];
