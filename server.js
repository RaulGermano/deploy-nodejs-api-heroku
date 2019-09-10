const express = require('express');

const port = process.env.PORT || 3000;

const server = express();

server.get('/', (req, res) => {
	res.send('Hello world');
});

server.listen(port);
