const { Sequelize, DataTypes } = require('sequelize');  

// Initialize Sequelize connection  
const sequelize = new Sequelize('lorezone', 'admin', 'Rakesh281004', {  
    host: 'lorezone-database1.cl8qoikeqdft.ap-south-1.rds.amazonaws.com',  
    dialect: 'mysql', // Specify the dialect (in this case, MySQL)  
    operatorsAliases: false,  
    pool: {  
        max: 5,  
        min: 0,  
        acquire: 30000,  
        idle: 10000  
    }  
});  

const db = {};  
db.Sequelize = sequelize;  
db.models = {};  
db.models.User = require('./user')(sequelize, Sequelize.DataTypes);  
module.exports = db;  

// Close Sequelize connection when the Node.js process exits  
process.on('exit', () => {  
    sequelize.close()  
        .then(() => {  
            console.log('Sequelize connection closed');  
        })  
        .catch((error) => {  
            console.error('Error closing Sequelize connection:', error);  
        });  
});  
