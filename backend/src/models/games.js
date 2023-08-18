const sequelize = require('sequelize');
const database = require('../db');
const schema = '';

class Games extends sequelize.Model{}


Games.init(
    {
        id :
        {
            type:sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        title :
        {
            type:sequelize.STRING,
            allowNull: false,
        },
        description :
        {
            type:sequelize.STRING,
            allowNull: false,
        },
        numberPlayers : 
        {
            type:sequelize.INTEGER,
            allowNull: false,
        },
        recommendedAge : 
        {
            type:sequelize.INTEGER,
            allowNull: false,
        },
        creationDate :
        {
            type:sequelize.DATE,
            allowNull:false
        },
        updateDate :
        {
            type:sequelize.DATE,
            allowNull:true
        }

    },
    {
        sequelize : database, modelName:'tb_games',schema
    }
)

module.exports = Games;