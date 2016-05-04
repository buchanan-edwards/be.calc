'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const Calc = require('./calc');

const calc = new Calc();
const port = process.env.port || 8000;
const app = express();

app.use(bodyParser.text());

app.get('/', (req, res, next) => {
	res.send('Usage: op a [b]');
});

app.post('/', (req, res, next) => {
    let args = req.body.split(/\s+/);
    let func = calc[args[0]];
    if (typeof func !== 'function') {
        return res.status(400).send(`Invalid function: ${args[0]}`);
    }
    try {
        args = args.slice(1);
        for (let i = 0; i < args.length; i++) {
            args[i] = parseFloat(args[i]);
        }
        res.status(200).send('' + func.apply(calc, args));
    } catch (e) {
        res.status(400).send(e.message);
    }
});

app.listen(port, _ => {
    console.log(`Listening on port ${port}`);
});
