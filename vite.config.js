import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist' // Ensure output directory is 'dist'
  }
  // No server proxy needed here as express will serve both API and static files from the same origin in production.
  // The proxy is typically for development when Vite dev server and backend server are separate.
})
