const { Sequelize } = require('sequelize');  

// Initialize Sequelize connection  
const sequelize = new Sequelize('lorezone', 'admin', 'Rakesh281004', {  
    host: 'lorezone-database1.cl8qoikeqdft.ap-south-1.rds.amazonaws.com',  
    dialect: 'mysql',  
    logging: false // Disable SQL query logging if you don't need it  
});  

// Test the connection  
async function testConnection() {  
    try {  
        await sequelize.authenticate();  
        console.log('Connection has been established successfully.');  
    } catch (error) {  
        console.error('Unable to connect to the database:', error);  
    }  
}  

// Execute the connection test  
testConnection();  

// Close the connection when the Node.js process exits  
process.on('exit', async () => {  
    try {  
        await sequelize.close();  
        console.log('Sequelize connection closed');  
    } catch (error) {  
        console.error('Error closing Sequelize connection:', error);  
    }  
});  

// Export the Sequelize instance as `db`  
const db = { sequelize };  
module.exports = db;  