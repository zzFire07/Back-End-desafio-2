const { Op } = require('sequelize');
const SuccessCaseModel = require('../models/successCaseModel.js');

async function getByFilter(data) {
  try {
    const {client, industry, projectType, startDate, finishDate, contact} = data;

    // Plantilla del Where a utilizar en el query.
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
        [Op.lt]: finishDate,
      },
      contact: {
        [Op.eq]: contact,
      },
    };

    // Chequeo de las variables del filtro. Esto es porque Sequelize las compararía buscando un Null.
    if (client == null) { delete whereFilter.client };
    if (industry == null) { delete whereFilter.industry };
    if (projectType == null) { delete whereFilter.projectType };
    if (startDate == null) { delete whereFilter.startDate };
    if (finishDate == null) { delete whereFilter.finishDate };
    if (contact == null) { delete whereFilter.contact };
    
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
