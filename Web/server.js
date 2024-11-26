const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from the "static" directory
app.use('/static', express.static(path.join(__dirname, 'static')));

// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle the search endpoint (dummy data for demonstration)
app.get('/search', (req, res) => {
  const query = req.query.query;

  // Mock search results
  const mockResults = [
    {
      image: 'laptop1.jpg',
      brand: 'BrandA',
      model: 'ModelA1',
      year: 2022,
      cpu: 'Intel i7',
      ram: '16GB',
      gpu: 'NVIDIA RTX 3060',
      storage: '512GB SSD',
      screen_size: '15.6"',
      os: 'Windows 11',
    },
    {
      image: 'laptop2.jpg',
      brand: 'BrandB',
      model: 'ModelB1',
      year: 2021,
      cpu: 'AMD Ryzen 5',
      ram: '8GB',
      gpu: 'AMD Radeon RX 6600M',
      storage: '1TB SSD',
      screen_size: '14"',
      os: 'Linux',
    },
  ];

  const filteredResults = mockResults.filter(
    (item) =>
      item.brand.toLowerCase().includes(query.toLowerCase()) ||
      item.model.toLowerCase().includes(query.toLowerCase()) ||
      item.cpu.toLowerCase().includes(query.toLowerCase())
  );

  res.json(filteredResults);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
