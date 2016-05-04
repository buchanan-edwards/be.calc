'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const Calc = require('./calc');

const calc = new Calc();
const port = process.env.port || 8000;
const app = express();

app.use(bodyParser.text());

// Returns the usage.
app.get('/', (req, res, next) => {
    res.send('Usage: op a [b]');
});

// Accepts a text body of an operator followed by one or more operands.
app.post('/', (req, res, next) => {
    try {
        let args = req.body.split(/\s+/);
        let func = calcFunction(args[0]);
        let nums = args.slice(1).map(parseFloat);
        res.status(200).send(func.apply(calc, nums).toString());
    } catch (e) {
        res.status(400).send(e.message);
    }
});

// Starts the server.
app.listen(port, _ => {
    console.log(`Listening on port ${port}`);
});

// Returns the calculator function given the function name.
function calcFunction(name) {
    let func = calc[name];
    if (typeof func !== 'function') {
        throw new Error(`Invalid function: ${name}`);
    }
    return func;
}
