const Cliente = require("../models/clientesModel");

//create function for get all clients
exports.getAllClients = async (req, res) => {
    try {
        const clients = await Cliente.find();
        res.status(200).json(clients);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los clientes" });
    }
}

//create function for get clients by id
exports.getClientById = async (req, res) => {
    try {
       const client = await Cliente.findById(req.params.id);
        if (!client) {
            return res.status(404).json({ error: "Cliente no encontrado" });
        }
        res.status(200).json(client);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener el cliente" });
    }
}

//create function to create new client
exports.createClient = async (req, res) => {
  try {
    const nuevoCliente = await Cliente.create(req.body);
    await nuevoCliente.save();
    res.status(201).json(nuevoCliente);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el cliente" });
  }
}

//create function to update client
exports.updateClient = async (req, res) => {
  try {
    const cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!cliente) {
      return res.status(404).json({ error: "Cliente no encontrado" });
    }
    res.status(200).json(cliente);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el cliente" });
  }
}

//create function to delete client
exports.deleteClient = async (req, res) => {
  try {
    const clienteId = req.params.id;
    const clienteEliminado = await Cliente.findByIdAndRemove(clienteId);
    res.status(200).json(clienteEliminado);
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el cliente" });
  }
}