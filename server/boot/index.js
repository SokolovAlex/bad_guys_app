module.exports = () => {

    require('./websocket')();

    require('../db').init();
}