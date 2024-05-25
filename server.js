const express = require('express');
const app = express();
const port = 5000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/api', (req, res) => {
  console.log('Received request at /api');
  res.json({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});

