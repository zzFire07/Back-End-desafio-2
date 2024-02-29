const IndustryModel = require('./industryModel');
const CaseDetailsModel = require('./caseDetailsModel');

const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class SuccessCaseModel extends Model {};

SuccessCaseModel.init(
  {
    // Atributos del Caso de Éxito.
    title: {
      type: DataTypes.STRING,
    },
    startDate: {
      type: DataTypes.DATE,
    },
    finishDate: {
      type: DataTypes.DATE,
    },
    teamSize: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: 'SuccessCase', // Nombre del modelo
    tableName: 'success_case', // Nombre de la tabla en la base de datos
  }
);

module.exports = SuccessCaseModel;