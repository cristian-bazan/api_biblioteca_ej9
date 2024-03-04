const express = require("express");
const router = express.Router();

const { getAllClients, getClientById, createClient, updateClient, deleteClient} = require("../controllers/clienteController");

// Importamos la libreria para validar scopes
const { requiredScopes } = require("express-oauth2-jwt-bearer");

// Ruta para obtener todos los clientes
router.get("/", requiredScopes("read:clientes"), getAllClients);

// Ruta para obtener un cliente por id
router.get("/:id", requiredScopes("read:clientes"), getClientById);

// Ruta para crear un nuevo cliente
router.post("/", requiredScopes("write:clientes"), createClient);

// Ruta para actualizar un cliente existente
router.put("/:id", requiredScopes("write:clientes"), updateClient);

// Ruta para eliminar un cliente
router.delete("/:id", requiredScopes("write:clientes"), deleteClient);

module.exports = router;