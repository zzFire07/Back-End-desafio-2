const SuccessCaseService = require('../services/successCaseService.js');

// Controller para obtener una lista con todos los Casos que coincidan con los filtros.
// Si está vacío realiza un GetAll.

async function getByFilter(req, res) {
  try {
    console.log(req.body);
    const {client, industry, projectType, startDate, finishDate, contact} = req.body;
    const filters = [client, industry, projectType, startDate, finishDate, contact];
    let filterAction = false;
    
    filters.forEach(element => {
      if (element != null) {
        filterAction = true;
      };
    });

    if (filterAction) {

    } else {

    }

    const cases = await SuccessCaseService.getByFilter(); 
    if (cases.length > 0) {
      return res.status(200).json({ cases: cases, message: 'La lista de casos de éxito ha sido obtenida correctamente.' });
    } else {
      return res.status(204).json({ message: 'La solicitud se ha completado con éxito pero no hay casos de éxito en el sistema' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener los casos de éxito.', error: error.message });
  }
}

module.exports = {
  getByFilter,
};
