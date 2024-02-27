const { Router } = require('express');
const router = Router();


const SuccessCaseController = require('../controllers/successCaseController');

// Ruta para obtener un caso por su ID. 
// !!!!!!!!! - Como pedimos los filtros?
// router.get('/SuccessCase/getById/:clientId', ClientController.getByIdClient);

// Ruta para obtener todos los casos.
router.get('/SuccessCase/getAll', SuccessCaseController.getByFilter);

// Ruta para crear un caso.
router.post('/SuccessCase/create', SuccessCaseController.create);


module.exports = router;