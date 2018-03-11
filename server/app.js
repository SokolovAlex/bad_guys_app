const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const config = require('./config');
const port = config.port;
const app = express();

app.listen(port, () => {
    console.log(`Quorter api starting on port ${port}!`);
});