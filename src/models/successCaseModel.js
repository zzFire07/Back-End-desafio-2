const Client = require('./clientModel');
//const Industry = require('./industryModel');
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
    client: {
      type: Client,
    },
    industry: {
      type: Industry,
    },
    projectType: {
      type: ProjectType,
    },
    startDate: {
      type: DataTypes.DATE,
    },
    finishDate: {
      type: DataTypes.DATE,
    },
    contact: {
      type: Contact,
    },
    offering: {
      type: Offering,
    },
    teamSize: {
      type: DataTypes.INTEGER,
    },
    caseDetails: {
      type: CaseDetails,
    },
    technologies: {
      type: Technologies,
    },
    improvements: {
      type: Improvements,
    },
    challenges: {
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