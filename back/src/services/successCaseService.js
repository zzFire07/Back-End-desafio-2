const { Op } = require('sequelize');
const SuccessCaseModel = require('../models/successCaseModel.js');

async function getByFilter(data) {
  try {
    const {client, industry, projectType, startDate, finishDate, contact} = data;

    // Plantilla del Where a utilizar en el query.
    const whereFilter = {
      client_id: {
        [Op.eq]: client,
      },
      industry_id: {
        [Op.eq]: industry,
      },
      projectType_id: {
        [Op.eq]: projectType,
      },
      startDate: {
        [Op.gt]: startDate,
      },
      finishDate: {
        [Op.lt]: finishDate,
      },
      contact_id: {
        [Op.eq]: contact,
      },
    };

    // Chequeo de las variables del filtro. Esto es porque Sequelize las compararía buscando un Null.
    if (client == null) { delete whereFilter.client_id };
    if (industry == null) { delete whereFilter.industry_id };
    if (projectType == null) { delete whereFilter.projectType_id };
    if (startDate == null) { delete whereFilter.startDate };
    if (finishDate == null) { delete whereFilter.finishDate };
    if (contact == null) { delete whereFilter.contact_id };
    
    // Query a la BD con los filtros.
    const cases = SuccessCaseModel.findAll({
      where: {...whereFilter}
    });
    return cases;
  } catch (error) {
    throw new Error(error);
  };
};

module.exports = {
  getByFilter,
};

