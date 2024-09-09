const express = require('express');
const { Pool } = require('pg');
const clienteRoutes = require('./routes/clienteRoutes');

const app = express();
const port = process.env.PORT || 3001;

// Conexão com o banco de dados PostgreSQL
const pool = new Pool({
  user: 'julialauries', // substitua com seu novo usuário
  host: 'localhost',
  database: 'consultorio',
  password: '272697Ju*', // substitua com a senha do usuário
  port: 5432,
});


app.use(express.json());

// Usar as rotas de clientes
app.use('/api/clientes', clienteRoutes);

// Testando o servidor
app.get('/', (req, res) => {
  res.send('Servidor rodando!');
});

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

module.exports = pool;
