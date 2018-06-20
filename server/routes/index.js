const express = require('express');
const roomsApi = require('./rooms');
const authApi = require('./auth');

const router = express.Router();

module.exports = () => {
    authApi(router);
    return roomsApi(router);
};