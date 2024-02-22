const ClientService = require('../services/clientService');

// Controlador para obtener todos los clientes
async function findAllClients(req, res) {
  try {
      const clients = await ClientService.getClients();
    if(clients){
      return res.status(200).json(clients);
    }
    else{
      return res.status(404).json({ message: 'No hay Clientes' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener los Clientes', error: error.message });
  }
}


// Controlador para obtener un cliente por su ID
async function findByIdClient(req, res) {
  const clientId = req.params.clientId;

  try {
    const client = await ClientService.getClientById(clientId);
    if (client) {
      return res.status(200).json(client);
    } else {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener el Cliente', error: error.message });
  }
}

// Controlador para crear un cliente
async function putClient(req, res) {
  const clientData = req.body;

  try {
    const client = await ClientService.putClient(clientData);
    if(client){
      return res.status(201).json(client);
    }
  } catch (error) {
    return res.status(500).json({ message: 'Error al crear el Cliente', error: error.message });
  }
}

// Controlador para crear un cliente
async function createClient(req, res) {
    try {
      const {nombre} = req.body;
  
      // Llama al servicio para crear el tipo de bebida
      const newClient = await ClientService.createClient({
        nombre,
      });
  
      if (newClient) {
        return res.status(200).json(newClient);
      } else {
        return res.status(404).json({ message: 'Ya existe un cliente con esos parámetros' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al crear el cliente', error: error.message });
    }
  }

module.exports = {
  findByIdClient,
  findAllClients,
  createClient,
};