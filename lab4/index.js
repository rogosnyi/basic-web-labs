const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

let nickname = "";

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

io.on('connection', (socket) => {
    socket.on('set username', (username) => {
        nickname = username
        socket.username = username;
        // Отправьте имя обратно клиенту
        socket.emit('name', username);
    });

    socket.on('chat message', (msg) => {
        io.emit('chat message', { username: socket.username, msg });
    });
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});