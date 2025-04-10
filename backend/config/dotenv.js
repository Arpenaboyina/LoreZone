const dotenv = require('dotenv');
const path = require('path');

// Load environment variables from .env file
dotenv.config({ path: path.resolve(__dirname, '../.env') });

if (process.env.NODE_ENV !== 'production') {
    console.log('✅ Environment variables loaded successfully.');
} else {
    console.log('🔒 Running in production mode.');
}
