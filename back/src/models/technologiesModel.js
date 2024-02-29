const {DataTypes, Model} = require('sequelize');
const sequelize = require('../config/database');

class TechnologiesModel extends Model {}

TechnologiesModel.init(
  {
    // Atributos de las tecnologías (El id está dado por Postgre)
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
    modelName: 'Technologies', // Nombre del modelo
    tableName: 'technologies', // Nombre de la tabla en la base de datos
  }
);

module.exports = TechnologiesModel;