'use strict';

require('dotenv').config();

const PORT = process.env.PORT || 3000;

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodeMailer = require('nodemailer');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});