const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config({path: './config/.env'});
const app = express();
const server = require('http').Server(app);
const ejs = require('ejs');

app.use(express.static('public'));
app.set('view engine', ejs);

app.get('/', (req, res) => {
    res.render('room.ejs');
});

server.listen(process.env.PORT, () => {
    console.log(`server is running at ${process.env.PORT}`.blue.bold.bgWhite);
});