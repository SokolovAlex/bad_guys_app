const express = require('express');
const roomsApi = require('./rooms');

const router = express.Router();

module.exports = () => {
    return roomsApi(router);
};