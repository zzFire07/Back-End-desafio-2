const { or } = require('sequelize');
const ClientModel = require('../models/clientModel.js');

// Servicio para crear un cliente
async function createClient(data) {
  try {
    const { nombre } = data;

    // Crea el cliente en la base de datos utilizando el modelo
    const newClient = await ClientModel.create({
      nombre,
    });

    return newClient;
  } catch (error) {
    throw new Error('Error al crear el cliente desde el JSON');
  }
}

// Servicio para obtener un cliente por su id
async function getByIdClient(clientId) {
  try {
    const getClient = await ClientModel.findByPk(clientId); 
    
    return getClient;
  } catch (error) {
    throw new Error('Error al obtener el cliente desde la base de datos');
  }
}

// Servicio para obtener todos los clientes
async function getAllClients() {
    try {
      const allClients = await ClientModel.findAll({
        order: [['id', 'ASC']], // Ordena por la columna 'id' de manera ascendente (de menor a mayor)
      });
      return allClients;
    } catch (error) {
      throw new Error('Error al obtener el cliente desde la base de datos');
    }
  }


module.exports = {
  createClient,
  getByIdClient,
  getAllClients,
};