const Sequelize = require('sequelize');

module.exports = {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    hash: { type: Sequelize.STRING, allowNull: true },
    email: { type: Sequelize.STRING, allowNull: true },
    name: { type: Sequelize.STRING, allowNull: true },
    birthDate: { type: Sequelize.DATE, allowNull: true },
    avatar: { type: Sequelize.STRING, allowNull: true }
};
