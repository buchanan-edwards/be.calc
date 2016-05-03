'use strict';

const express = require('express');

const port = process.env.port || 8000;

const app = express();

app.listen(port, _ => {
    console.log(`Listening on port ${port}`);
})
