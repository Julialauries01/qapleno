const express = require('express');
const clienteController = require('../controllers/clienteController');

const router = express.Router();

// Rota para listar todos os clientes
router.get('/', clienteController.listarClientes);

// Rota para inserir um novo cliente
router.post('/', clienteController.inserirCliente);

// Rota para deletar um cliente
router.delete('/:cpf', clienteController.deletarCliente);

module.exports = router;
