const db = require('../config/db'); // Import MySQL connection

// Fetch all trends from the database
const getTrends = async (req, res) => {
  try {
    const [trends] = await db.query('SELECT id, trend_type, style_name, description, style_pic_url FROM trends');

    if (trends.length === 0) {
      return res.status(404).json({ message: 'No trends found' });
    }

    res.status(200).json(trends);
  } catch (error) {
    console.error('Database Error:', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Export function
module.exports = { getTrends };
