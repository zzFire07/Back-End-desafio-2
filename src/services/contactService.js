const ContactModel = require('../models/contactModel');

// Servicio para obtener todos los contactos
async function getAllContacts() {
    try {
        const contact = await ContactModel.findAll();
        return contact;
    } catch (error) {
        throw error;
    }
}

async function getContactById(contactId) {
    try {
        const contact = await ContactModel.findByPk(contactId);
        return contact;
    } catch (error) {
        throw new Error('Error al obtener el contacto desde la base de datos');
    }
}


module.exports = {
    getAllContacts,
    getContactById,
};