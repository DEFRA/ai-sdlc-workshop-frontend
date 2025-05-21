const app = require('./app');

const port = process.env.PORT || 3000;

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
}); 