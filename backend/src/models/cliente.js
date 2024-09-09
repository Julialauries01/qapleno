const pool = require('../index');

// Função para listar todos os clientes
const listarClientes = async () => {
  const res = await pool.query('SELECT * FROM clientes ORDER BY nome ASC');
  return res.rows;
};

// Função para inserir um cliente
const inserirCliente = async (cliente) => {
  const { cpf, nome, dataNascimento, endereco, whatsapp, email } = cliente;
  const res = await pool.query(
    'INSERT INTO clientes (cpf, nome, data_nascimento, endereco, whatsapp, email) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
    [cpf, nome, dataNascimento, endereco, whatsapp, email]
  );
  return res.rows[0];
};

// Função para deletar um cliente
const deletarCliente = async (cpf) => {
  await pool.query('DELETE FROM clientes WHERE cpf = $1', [cpf]);
};

module.exports = {
  listarClientes,
  inserirCliente,
  deletarCliente,
};
