const Sequelize = require('sequelize');
const config = require('../config').db;

let db = {};

const init = () => {
    db = new Sequelize(config.name, null, null, config.options);

    db.authenticate()
        .then(() => {
            console.log(`Connection to ${config.name} has been established successfully.`);
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });

    const User = db.define('User', {
        id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        hash: { type: Sequelize.STRING, allowNull: true },
        email: { type: Sequelize.STRING, allowNull: true },
        name: { type: Sequelize.STRING, allowNull: true },
        birthDate: { type: Sequelize.DATE, allowNull: true },
        avatar: { type: Sequelize.STRING, allowNull: true }
    });

    db.sync();
};

module.exports = {
    instance: () => db,
    init
};