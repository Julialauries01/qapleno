const bcrypt = require('bcryptjs');

// Função para criptografar dados
const encryptData = (data) => {
  const salt = bcrypt.genSaltSync(10); // Gerar um salt com 10 rounds
  const encryptedData = bcrypt.hashSync(data, salt); // Criptografar o dado
  return encryptedData;
};

// Função para comparar dados
const compareData = (data, encryptedData) => {
  return bcrypt.compareSync(data, encryptedData); // Comparar dado com o dado criptografado
}

module.exports = {
  encryptData,
  compareData
};
