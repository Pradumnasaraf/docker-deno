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