module.exports = () => {

    const websocket = require('../services/websocket');

    websocket.start();

    require('../db').init();

    require('./passport')();
}