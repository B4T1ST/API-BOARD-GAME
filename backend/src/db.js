const sequelize = require("sequelize");

const database = new sequelize('boardGame','banco','33580887',
{
    dialect: 'mssql',host:'localhost',port:1433
});

database.sync();

module.exports = database;