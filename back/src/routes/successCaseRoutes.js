const { Router } = require('express');
const router = Router();

const SuccessCaseModel = require('../models/successCaseModel.js');


const SuccessCaseController = require('../controllers/successCaseController');

// Ruta para obtener un caso por su ID. 
router.get('/successCase/getById/:id', SuccessCaseController.getById);

// Ruta para obtener todos los casos opcionalmente recibe filtros para la búsqueda.
router.post('/successCase/getByFilter', SuccessCaseController.getByFilter);

// Ruta para crear un caso.
router.post('/successCase/create', SuccessCaseController.create);

// Ruta para obtener todos los casos.
router.get('/successCase/getAll', SuccessCaseController.getAll);

module.exports = router;