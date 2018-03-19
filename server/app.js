const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const boot = require('./boot');
const config = require('./config');
const port = config.port;
const app = express();

boot();

app.listen(port, () => {
    console.log(`Application api starting on port ${port}!`);
});