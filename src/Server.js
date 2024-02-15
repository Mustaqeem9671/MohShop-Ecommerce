const express = require('express');
const app = express();

// Other middleware setup and configuration...

// Import the newArrivals route
const newArrivalsRoute = require('./routes/newArrivals');

// Use the newArrivals route
app.use('/newArrivals', newArrivalsRoute);

// Start the Express server
const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
