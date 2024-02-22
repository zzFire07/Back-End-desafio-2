const ContactService = require("../services/contactService");

// Controlador para obtener todos los contactos
async function findAllContacts(req, res) {
  try {
    const contacts = await ContactService.getContacts();
    if (contacts) {
      return res.status(200).json(contacts);
    }
  } catch (error) {
    return res
      .status(404)
      .json({ message: "Error al obtener los contactos", error: error.message });
  }
}

// Controlador para obtener un contacto por su ID
async function findByIdContact(req, res) {
  const contactId = req.params.contactId;

  try {
    const contact = await ContactService.getContactById(contactId);
    if (contact) {
      return res.status(200).json(contact);
    }
  } catch (error) {
    return res
      .status(404)
      .json({ message: "Error al obtener el contacto", error: error.message });
  }
}

// Controlador para crear un contacto
async function createContact(req, res) {
  try {
    const { nombre } = req.body;
    const { apellido } = req.body;
    const { email } = req.body;

    const newContact = await ContactService.createContact({
      nombre,
      apellido,
      email,
    });

    if (newContact) {
      return res.status(201).json(newContact);
    }
  } catch (error) {
    return res
      .status(400)
      .json({ error: "Error al crear el contacto", error: error.message });
  }
}

module.exports = {
  findByIdContact,
  findAllContacts,
  createContact,
};