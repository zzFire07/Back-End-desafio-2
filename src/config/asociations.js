const successCaseModel = require('../models/successCaseModel');
const industryModel = require('../models/industryModel');
const caseDetailsModel = require('../models/caseDetailsModel');


industryModel.hasMany(successCaseModel, { foreignKey: 'industry_id', as: 'industry'});

successCaseModel.belongsTo(industryModel, { foreignKey: 'industry_id', as: 'industry'});