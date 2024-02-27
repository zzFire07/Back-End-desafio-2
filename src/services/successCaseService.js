const SuccessCaseModel = require('../models/successCaseModel.js');

async function getByFilter(data) {
  try {
    const {client, industry, projectType, startDate, finishDate, contact} = data;

    const whereFilter = {
      client: {
        [Op.eq]: client,
      },
      industry: {
        [Op.eq]: industry,
      },
      projectType: {
        [Op.eq]: projectType,
      },
      startDate: {
        [Op.gt]: startDate,
      },
      finishDate: {
        [Op.gt]: finishDate,
      },
      contact: {
        [Op.gt]: contact,
      },
    };

    
    const cases = SuccessCaseModel.findAll(

    );

  } catch (error) {
    throw new Error(error);
  };
};