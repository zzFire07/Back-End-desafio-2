const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database.js');

class ContactModel extends Model { }

ContactModel.init(
    {
        name: {
            type: DataTypes.STRING,
        },
        lastName: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        modelName: 'Contact',
        tableName: 'contact',
    }
);

module.exports = ContactModel;