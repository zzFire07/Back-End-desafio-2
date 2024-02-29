const Client = require('./clientModel');
const Industry = require('./industryModel');
const ProjectType = require('./projectTypeModel');
const Contact = require('./contactModel');
const Offering = require('./offeringModel');
const CaseDetails = require('./caseDetailsModel');
const Technologies = require('./technologiesModel');
const Improvements = require('./improvementsModel');
const Challenges = require('./challengesModel');

const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database.js');

class SuccessCaseModel extends Model {}

SuccessCaseModel.init(
  {
    // Atributos del Caso de Éxito.
    title: {
      type: DataTypes.STRING,
    },
    client_id: {
      type: Client,
    },
    industry_id: {
      type: Industry,
    },
    projectType_id: {
      type: ProjectType,
    },
    startDate: {
      type: DataTypes.DATE,
    },
    finishDate: {
      type: DataTypes.DATE,
    },
    contact_id: {
      type: Contact,
    },
    offering_id: {
      type: Offering,
    },
    teamSize: {
      type: DataTypes.INTEGER,
    },
    caseDetails_id: {
      type: CaseDetails,
    },
    technologies_id: {
      type: Technologies,
    },
    improvements_id: {
      type: Improvements,
    },
    challenges_id: {
      type: Challenges,
    },
  },
  {
    sequelize,
    modelName: 'SuccessCase', // Nombre del modelo
    tableName: 'success_case', // Nombre de la tabla en la base de datos
  }
);



module.exports = SuccessCaseModel;