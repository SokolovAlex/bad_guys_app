const Sequelize = require('sequelize');
const config = require('../config').db;

const UserScheme = require('./user');
const RoomScheme = require('./room');

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

    const User = db.define('User', UserScheme);
    const Room = db.define('Room', RoomScheme);

    User.belongsTo(Room, { foreignKey: 'fk_room', targetKey: 'id' });

    db.sync();
};

module.exports = {
    instance: () => db,
    init
};