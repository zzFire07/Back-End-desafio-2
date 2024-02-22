const { Router } = require('express');
const router = Router();


const ClientController = require('../controllers/clientController');

// Ruta para obtener un cliente por su ID
router.get('/clients/findByIdClient/:clientId', ClientController.findByIdClient);

// Ruta para mostrar todos los clientes
router.get('/clients/findAllClient', ClientController.findAllClients);

// Ruta para crear un cliente
router.post('/clients/createClient', ClientController.createClient);


module.exports = router;