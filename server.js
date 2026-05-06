const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 8080;

// Check if we're in the dist folder (Azure) or project root (local dev)
const distPath = path.join(__dirname, 'dist', 'Italent', 'browser');
const staticPath = fs.existsSync(distPath) ? distPath : __dirname;

console.log(`Serving files from: ${staticPath}`);

// Serve static files
app.use(express.static(staticPath));

// For all other routes, serve index.html
app.get('/*', (req, res) => {
  res.sendFile(path.join(staticPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
