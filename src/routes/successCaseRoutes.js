const { Router } = require('express');
const router = Router();


const SuccessCaseController = require('../controllers/successCaseController');

// Ruta para obtener un caso por su ID. 
//router.get('/SuccessCase/getById', SuccessCaseController.getById);

// Ruta para obtener todos los casos. Opcionalmente recibe filtros para la búsqueda.
router.get('/SuccessCase/getByFilter', SuccessCaseController.getByFilter);

// Ruta para crear un caso.
router.post('/SuccessCase/create', SuccessCaseController.create);


module.exports = router;