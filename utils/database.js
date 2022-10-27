const Sequelize = require('sequelize');

//Objeto de conexión
const sequelize = new Sequelize('BDsemanatec', 'admin', 'e-M-G-S-10', {
    dialect: 'mysql',
    host: 'database-1.chbpwzwblaah.us-east-1.rds.amazonaws.com',
    define: {
        timestamps: false,
        freezeTableName: true
    }
})
module.exports = sequelize;