const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const fetch = require("node-fetch");

const app = express();
const PORT = 3000;

app.use(cookieParser());
app.use(express.json());

app.use('/build', express.static(path.join(__dirname, '../build')));
app.use(express.static('/client'));

app.get('/', (req, res) => {
	return res.sendFile(path.join(__dirname, '../client/index.html'));
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
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));