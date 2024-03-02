const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database.js');
const SuccessCaseModel = require('./successCaseModel.js');

class ClientModel extends Model {}

ClientModel.init(
  {
    // Atributos de cliente (el id lo genera Postgres)
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
    },
    surName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: 'client', // Nombre del modelo
    tableName: 'client', // Nombre de la tabla en la base de datos
  }
);

module.exports = ClientModel;