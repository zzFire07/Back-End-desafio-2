const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database.js');

class IndustryModel extends Model { }

IndustryModel.init(
    {
        name: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        modelName: 'Industry',
        tableName: 'industry',
    }
);

module.exports = IndustryModel;

