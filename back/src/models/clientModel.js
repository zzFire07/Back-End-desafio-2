const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database.js');

class clientModel extends Model {}

clientModel.init(
  {
    // Atributos de cliente (el id lo genera Postgres)
    nombre: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: 'Client', // Nombre del modelo
    tableName: 'client', // Nombre de la tabla en la base de datos
  }
);



module.exports = ClientModel;