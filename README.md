# ConversionAPI

A collection of conversions from various sources as well as calculations written in NodeJS and wrapped in a [Docker container](https://hub.docker.com/r/themranderson/conversionapi) with Swagger documentation for easy consumption.

## Usage

Example Docker Command: `docker run -p '3000:3000/tcp' -e 'IPADDRESS=localhost' -e 'PORT=3000' 'themranderson/conversionapi:latest'`

Root endpoint (example: `http://localhost:3000`) returns a 200 and also builds a link to the Swagger page upon container start.  The root endpoint can be used for an API health check if desired.

Swagger documentation is auto generated upon container startup.

Example API call: `http://localhost:3000/api/v2/Capacity/OunceToUsGallon/5`

### Environment Variables

Both `PORT` and `IPADDRESS` are to configure not only the API, but also Swagger so the documentation works as expected.  The Swagger page is automatically built with every container start and these values are passed in.

- `PORT`: The port you want to expose.  Should match the container port mapping, defaults to 3000
- `IPADDRESS`: The IP address or hostname you are using for the container.
- `RATELIMITMINUTES`: The number of minutes in the rate limiting window, defaults to 15
- `RATELIMITMAX`: The max number of requests per IP in each rate limiting window, defaults to 100

## Contributing

If you notice a bug, please report an issue or jump in a fix it. If you would like to contribute, please submit a PR.
