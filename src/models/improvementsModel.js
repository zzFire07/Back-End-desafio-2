const {DataTypes, Model} = require('sequelize');
const sequelize = require('../config/database');

class ImprovementsModel extends Model {}

ImprovementsModel.init(
  {
    // Atributos del Mejoramiento (El id está dado por Postgre)
    image: {
      type: DataTypes.STRING,
    },
    video: {
      type: DataTypes.STRING,
    },
    text: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: 'Improvements', // Nombre del modelo
    tableName: 'improvements', // Nombre de la tabla en la base de datos
  }
);

module.exports = ImprovementsModel;