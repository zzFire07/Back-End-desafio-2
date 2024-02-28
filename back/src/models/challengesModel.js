const {DataTypes, Model} = require('sequelize');
const sequelize = require('../config/database');

class ChallengesModel extends Model {}

ChallengesModel.init(
  {
    // Atributos del Desafío (El id está dado por Postgre)
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
    modelName: 'Challenges', // Nombre del modelo
    tableName: 'challenges', // Nombre de la tabla en la base de datos
  }
);

module.exports = ChallengesModel;