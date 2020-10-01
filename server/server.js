const path = require('path');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
// const cors = require('cors');
// const fetch = require("node-fetch");
const http = require('http').createServer(app); 				// wraps http over express server
const io = require('socket.io')(http); 									// makes a socket instance using http

const PORT = 3000;

app.use(cookieParser());
app.use(express.json());
// app.use(cors({ credentials: true, origin: "http://localhost:8080" }));

app.use('/build', express.static(path.join(__dirname, '../build')));
app.use(express.static('/client'));

app.get('/', (req, res) => {
	return res.sendFile(path.join(__dirname, '../client/index.html'));
});

// special 'connection' and 'disconnect' events
io.on('connection', (socket) => {
	// socket.removeAllListeners()
	// console.log('a user connected');
	socket.on('disconnect', () => {
		// console.log('user disconnected');
	});

	// listens for when client sends a msg
	socket.on('msg', (msg) => {
		console.log('message: ' + msg);
		io.emit('chat message', msg)								// emits a BROADCAST to all connected sockets
	});

	socket.on('user', (user) => {
		io.emit('newUser', user)
		console.log(user);
	})
});

//Handles all unknown URLs
app.use('*', (req, res) => {
	res.status(404).send('URL path not found');
});

//Catch all route handler - NEEDS UPDATING -
app.use((req, res) => {
	console.log('catch-all route handler is working');
});

//Tells server to listen
http.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));