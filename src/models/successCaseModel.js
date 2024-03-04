const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class SuccessCaseModel extends Model {};

SuccessCaseModel.init(
  {
    // Atributos del Caso de Éxito.
    title: DataTypes.STRING,
    startDate: DataTypes.DATE,
    finishDate: DataTypes.DATE,
    teamSize: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'SuccessCase', // Nombre del modelo
    tableName: 'success_case', // Nombre de la tabla en la base de datos
  }
);

module.exports = SuccessCaseModel;