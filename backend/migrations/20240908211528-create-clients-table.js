module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('clients', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      name: Sequelize.STRING,
      birth_date: Sequelize.DATEONLY,
      address: Sequelize.STRING,
      whatsapp: Sequelize.STRING,
      email: Sequelize.STRING,
    });
  },
};
