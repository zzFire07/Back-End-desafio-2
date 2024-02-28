const ClientModel = require('./clientModel.js');
const IndustryModel = require('./industryModel.js');
const ProjectTypeModel = require('./projectTypeModel.js');
const ContactModel = require('./contactModel.js');
const OfferingModel = require('./offeringModel.js');
const CaseDetailsModel = require('./caseDetailsModel.js');
const TechnologiesModel = require('./technologiesModel.js');
const ImprovementsModel = require('./improvementsModel.js');
const ChallengesModel = require('./challengesModel.js');

const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database.js');

class SuccessCaseModel extends Model {};

SuccessCaseModel.init(
  {
    // Atributos del Caso de Éxito.
    title: {
      type: DataTypes.STRING,
    },
    client_id: {
      type: DataTypes.INTEGER,
      references: {
        // This is a reference to Client
        model: ClientModel,
        // This is the column name of the referenced model
        key: 'id',
      },
    },
    industry_id: {
      type: DataTypes.INTEGER,
      references: {
        model: IndustryModel,
        key: 'id',
      },
    },
    projectType_id: {
      type: DataTypes.INTEGER,
      references: {
        model: ProjectTypeModel,
        key: 'id',
      },
    },
    startDate: {
      type: DataTypes.DATE,
    },
    finishDate: {
      type: DataTypes.DATE,
    },
    contact_id: {
      type: DataTypes.INTEGER,
      references: {
        model: ContactModel,
        key: 'id',
      },
    },
    offering_id: {
      type: DataTypes.INTEGER,
      references: {
        model: OfferingModel,
        key: 'id',
      },
    },
    teamSize: {
      type: DataTypes.INTEGER,
    },
    caseDetails_id: {
      type: DataTypes.INTEGER,
      references: {
        model: CaseDetailsModel,
        key: 'id',
      },
    },
    technologies_id: {
      type: DataTypes.INTEGER,
      references: {
        model: TechnologiesModel,
        key: 'id',
      },
    },
    improvements_id: {
      type: DataTypes.INTEGER,
      references: {
        model: ImprovementsModel,
        key: 'id',
      },
    },
    challenges_id: {
      type: DataTypes.INTEGER,
      references: {
        model: ChallengesModel,
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'SuccessCase', // Nombre del modelo
    tableName: 'success_case', // Nombre de la tabla en la base de datos
  }
);

SuccessCaseModel.belongsTo(ClientModel, { foreignKey: 'client_id', as: 'client' });
SuccessCaseModel.belongsTo(IndustryModel, { foreignKey: 'industry_id', as: 'industry' });
SuccessCaseModel.belongsTo(ProjectTypeModel, { foreignKey: 'projectType_id', as: 'projectType' });
SuccessCaseModel.belongsTo(ContactModel, { foreignKey: 'contact_id', as: 'contact' });
SuccessCaseModel.belongsTo(OfferingModel, { foreignKey: 'offering_id', as: 'offering' });
SuccessCaseModel.belongsTo(CaseDetailsModel, { foreignKey: 'caseDetails_id', as: 'caseDetails' });
SuccessCaseModel.belongsTo(TechnologiesModel, { foreignKey: 'technologies_id', as: 'technologies' });
SuccessCaseModel.belongsTo(ImprovementsModel, { foreignKey: 'improvements_id', as: 'improvements' });
SuccessCaseModel.belongsTo(ChallengesModel, { foreignKey: 'challenges_id', as: 'challenges' });

module.exports = SuccessCaseModel;