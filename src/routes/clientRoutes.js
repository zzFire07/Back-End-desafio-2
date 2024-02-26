const { Router } = require("express");
const router = Router();

const ClientController = require("../controllers/clientController");

// Ruta para obtener un cliente por su ID
router.get("/Client/findById/:clientId", ClientController.findByIdClient);

// Ruta para mostrar todos los clientes
router.get("/Client/getAll", ClientController.findAllClients);

// Ruta para crear un cliente
router.post("/Client/new", ClientController.createClient);

module.exports = router;
