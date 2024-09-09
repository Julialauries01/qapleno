const clienteModel = require('../models/cliente');

// Controlador para listar todos os clientes
const listarClientes = async (req, res) => {
  try {
    const clientes = await clienteModel.listarClientes();
    res.json(clientes);
  } catch (error) {
    console.error('Erro ao listar clientes:', error); // Adicione esta linha para logar o erro
    res.status(500).json({ error: 'Erro ao listar clientes' });
  }
};

// Controlador para inserir um novo cliente
const inserirCliente = async (req, res) => {
  try {
    const novoCliente = await clienteModel.inserirCliente(req.body);
    res.status(201).json(novoCliente);
  } catch (error) {
    console.error('Erro ao inserir cliente:', error); // Adicione esta linha para logar o erro
    res.status(500).json({ error: 'Erro ao inserir cliente' });
  }
};

// Controlador para deletar um cliente
const deletarCliente = async (req, res) => {
  try {
    await clienteModel.deletarCliente(req.params.cpf);
    res.status(204).send();
  } catch (error) {
    console.error('Erro ao deletar cliente:', error); // Adicione esta linha para logar o erro
    res.status(500).json({ error: 'Erro ao deletar cliente' });
  }
};

module.exports = {
  listarClientes,
  inserirCliente,
  deletarCliente,
};
