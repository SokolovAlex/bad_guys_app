const Sequelize = require('sequelize');
const config = require('../config').db;

const UserScheme = require('./user');
const RoomScheme = require('./room');
const operatorsAliases = require('./aliases');

let db = {};

const init = () => {
    db = new Sequelize(config.name, null, null, {...config.options, operatorsAliases});

    db.authenticate()
        .then(() => {
            console.log(`Connection to ${config.name} has been established successfully.`);
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });

    const User = db.define('User', UserScheme);
    const Room = db.define('Room', RoomScheme);

    User.belongsTo(Room, { foreignKey: 'roomId', targetKey: 'id' });
    Room.hasMany(User, { foreignKey: 'members', sourceKey: 'id' })

    db.sync();
    //db.sync({ force: true });
};

module.exports = {
    instance: () => db,
    init
};