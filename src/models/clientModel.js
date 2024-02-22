const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database.js');

class ClientModel extends Model {}

ClientModel.init(
  {
    // Atributos de cliente (el id lo genera Postgres)
    name: {
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