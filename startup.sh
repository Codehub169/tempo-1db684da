#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# Install dependencies
# Using "npm install" will ensure dependencies are installed according to package.json
# and will update package-lock.json if it's out of sync or create it if missing.
# This resolves "npm ci" errors when package.json and package-lock.json are not in sync.
npm install

# Build the React frontend
# (Common for projects using @heroicons/react, assumed from error log)
npm run build

# Start the server
# (The server log implies a server process was intended to start)
# The server.js is configured to serve static files from 'dist' and listen on port 9000.
npm start