## Deno API

A simple HTTP server build with TypeScript and Deno as a runtime to serve a simple JSON response. This is for Docker's [Deno Language Guide](https://docs.docker.com/guides/deno/).

The server only supports the HTTP GET method at the moment. When a GET request is received, the server responds with a JSON object:

```json
{
    "message": "OK"
}
```

## Project Structure

- **server.js** - The main application file. This file contains the main server code for the application.
- **Dockerfile** - The Dockerfile for building the application image.
- **compose.yml** - The Docker Compose file for running the application.

## Setup Instructions

### Running with Docker Compose

To run the Deno server using Docker Compose, you'll need to create a Dockerfile for the server. Below is the [Dockerfile](Dockerfile) for the our server:

```Dockerfile
# Use the official Deno image
FROM denoland/deno:latest

# Set the working directory
WORKDIR /app

# Copy server code into the container
COPY server.ts .

# Set permissions (optional but recommended for security)
USER deno

# Expose port 8000
EXPOSE 8000

# Run the Deno server
CMD ["run", "--allow-net", "server.ts"]
```

To run this application using Docker Compose, you'll need to create a `compose.yml` file. Here's the `compose.yml` file:

```yaml
services:
  server:
    image: deno-server
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "8000:8000"
```

To build and run the Docker image using Docker Compose, use the following command:

```bash
docker compose up
```

This will build the Docker image and then run it, mapping the container's port 8000 to port 8000 on the host machine. You can then access the API by visiting `http://localhost:8000` in your web browser.

## Backlinks
For more information, check the related [use case guide](https://docs.docker.com/guides/deno).

## License
This project is licensed under the [Apache 2.0 License](/LICENSE).

## Contributing

Since this project is intended to support a specific use case guide, contributions are limited to bug fixes or security issues. If you have a question, feel free to open an issue!
