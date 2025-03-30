const express = require('express');
const cors = require('cors');
require('dotenv').config();
const trendRoutes = require('./routes/trendRoutes'); // Import trend routes
const eventRoutes = require('./routes/eventRoutes');
const DreambigRoutes = require('./routes/dreamBigRoutes'); // Import dreamBigRoutes
const postRoutes = require("./routes/postRoutes");
const brandRoutes = require('./routes/brandRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Allow JSON parsing

// Register Routes
app.use('/api/trend', trendRoutes); // Base path for trends
app.use('/api/event', eventRoutes);
app.use('/api/dream', DreambigRoutes);  // ✅ FIXED: Removed comma, used correct variable name
app.use("/api/posts", postRoutes);
app.use('/api/brand', brandRoutes);

// Default Route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start Server
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
