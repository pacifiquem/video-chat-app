const { v4: uuidv4 } = require("uuid");
const colors = require('colors');
const ejs = require('ejs');
const dotenv = require('dotenv').config({path: './config/.env'});
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require("socket.io")(server);
const { ExpressPeerServer } = require('peer');


const peerServer = ExpressPeerServer(server, {
    debug: true,
    path: '/peerServer'
});

app.use(express.static('public'));
app.set('view engine', 'ejs');


io.on('connection', (socket) => {
    console.log(socket);
});

app.get('/', (req, res) => {
   res.redirect(`/${uuidv4()}`);
});

app.get("/:room", (req, res) => {
    res.render('room', { roomId: req.param.room });
});


server.listen(process.env.PORT, () => {
    console.log(`server is running at ${process.env.PORT}`.blue.bold.bgWhite);
});