const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,    
  user: process.env.DB_USER,    
  password: process.env.DB_PASS, 
  database: process.env.DB_NAME, 
  waitForConnections: true,
  connectionLimit: 10,   // Max number of connections in the pool
  queueLimit: 0
});

// Promisify the pool for async/await support
const db = pool.promise();

module.exports = db;
