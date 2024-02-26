const { Router } = require('express');
const router = Router();


const ContactController = require('../controllers/contactController');

// Ruta para obtener un contacto por su ID
router.get('/Contact/getContact/:contactId', ContactController.findByIdContact);

// Ruta para mostrar todos los contactos
router.get('/Contact/getAll', ContactController.findAllContacts);

// Ruta para crear un contacto
router.post('/Contact/new', ContactController.createContact);


module.exports = router;