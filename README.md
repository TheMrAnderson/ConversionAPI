# ConversionAPI

This all started with my dad having a spreadsheet with random conversions.  Some were weird and some were not so weird.  I have ported them to a couple of languages over the years as needed.  I've also added quite a few conversions as my needs changed, as well as some calculations that aren't conversions.  Now it's an API running in a Docker container.

## Usage

Use the [Docker container](https://hub.docker.com/r/themranderson/conversionapi).

Example Docker Command: `docker run -p '3000:3000/tcp' -e 'IPADDRESS=localhost' -e 'PORT=3000' 'themranderson/conversionapi:latest'`

### Environment Variables

- `PORT` sets the port the API uses
- `IPADDRESS` is to tell Docker and the root page where to set the server IP Address or hostname for your environment

## Contributing

If you notice a bug, please report an issue. If you would like to contribute, please submit a PR.
