#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# Install dependencies
if [ -f package-lock.json ]; then
  npm ci
else
  npm install
fi

# Build the React frontend
npm run build

# Start the server on port 9000
# The server.js file is configured to listen on port 9000
npm start