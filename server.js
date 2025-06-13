import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 9000;

// Middleware to parse JSON bodies
app.use(express.json());

// API route for contact form
app.post('/api/contact', (req, res) => {
  console.log('Contact form data received on port 9000:', req.body);
  // Basic validation
  if (req.body.name && req.body.email && req.body.message) {
    // In a real application, you would process the data here (e.g., send an email, save to database)
    res.status(200).json({ message: 'Message received successfully! We will be in touch.' });
  } else {
    res.status(400).json({ message: 'Missing form data. Please fill out all fields.' });
  }
});

// Serve static files from the React app build directory (dist)
app.use(express.static(path.join(__dirname, 'dist')));

// The "catchall" handler: for any request that doesn't match one above,
// send back React's index.html file from the dist folder.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log(`Serving static files from ${path.join(__dirname, 'dist')}`);
  console.log(`Frontend should be accessible at http://localhost:${PORT}`);
});