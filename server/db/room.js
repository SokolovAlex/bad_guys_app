const Sequelize = require('sequelize');

module.exports = {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: Sequelize.STRING, allowNull: true },
    description: { type: Sequelize.STRING, allowNull: true },
    started: { type: Sequelize.DATE, allowNull: true }
};
