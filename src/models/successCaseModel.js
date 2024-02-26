const Offering = require('./offeringModel');
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database.js');

class SuccessCaseModel extends Model {}

SuccessCaseModel.init(
  {
    // Atributos del Caso de Éxito.
    title: {
      type: DataTypes.STRING,
    },
    client: {
      type: DataTypes.INTEGER,
    },
    industry: {
      type: DataTypes.INTEGER,
    },
    projectType: {
      type: DataTypes.INTEGER,
    },
    startDate: {
      type: DataTypes.DATE,
    },
    finishDate: {
      type: DataTypes.DATE,
    },
    contact: {
      type: DataTypes.INTEGER,
    },
    offering: {
      type: Offering,
    },
    teamSize: {
      type: DataTypes.INTEGER,
    },

    caseDetails: {
      type: CaseDetails,
    }
  },
  {
    sequelize,
    modelName: 'SuccessCase', // Nombre del modelo
    tableName: 'success_case', // Nombre de la tabla en la base de datos
  }
);



module.exports = SuccessCaseModel;