const successCaseModel = require('../models/successCaseModel');
const industryModel = require('../models/industryModel');
const ClientModel = require('../models/clientModel');
const ProjectTypeModel = require('../models/projectTypeModel');
const ContactModel = require('../models/contactModel');
const OfferingModel = require('../models/offeringModel');
const CaseDetailsModel = require('../models/caseDetailsModel');
const TechnologiesModel = require('../models/technologiesModel');
const ImprovementsModel = require('../models/improvementsModel');
const ChallengesModel = require('../models/challengesModel');

ClientModel.hasMany(successCaseModel, { foreignKey: 'clientId', as: 'successCases'});
successCaseModel.belongsTo(ClientModel, { foreignKey: 'clientId', as: 'client'});

industryModel.hasMany(successCaseModel, { foreignKey: 'industryId', as: 'successCases'});
successCaseModel.belongsTo(industryModel, { foreignKey: 'industryId', as: 'industry'});

ProjectTypeModel.hasMany(successCaseModel, { foreignKey: 'projectTypeId', as: 'successCases'});
successCaseModel.belongsTo(ProjectTypeModel, { foreignKey: 'projectTypeId', as: 'projectType'});

ContactModel.hasMany(successCaseModel, { foreignKey: 'contactId', as: 'successCases'});
successCaseModel.belongsTo(ContactModel, { foreignKey: 'contactId', as: 'contact'});

OfferingModel.hasMany(successCaseModel, { foreignKey: 'offeringId', as: 'successCases'});
successCaseModel.belongsTo(OfferingModel, { foreignKey: 'offeringId', as: 'offering'});

CaseDetailsModel.hasOne(successCaseModel, { foreignKey: 'caseDetailsId', as: 'successCase'});
successCaseModel.belongsTo(CaseDetailsModel, { foreignKey: 'caseDetailsId', as: 'caseDetails'});

TechnologiesModel.hasOne(successCaseModel, { foreignKey: 'technologiesId', as: 'successCase'});
successCaseModel.belongsTo(TechnologiesModel, { foreignKey: 'technologiesId', as: 'technologies'});

ImprovementsModel.hasOne(successCaseModel, { foreignKey: 'improvementsId', as: 'successCase'});
successCaseModel.belongsTo(ImprovementsModel, { foreignKey: 'improvementsId', as: 'improvements'});

ChallengesModel.hasOne(successCaseModel, { foreignKey: 'challengesId', as: 'successCase'});
successCaseModel.belongsTo(ChallengesModel, { foreignKey: 'challengesId', as: 'challenges'});