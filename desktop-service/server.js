const path = require('path');
const express = require('express');
const http = require('http');
const axios = require('axios');
const app = express();
const port = process.env.PORT || '3000';

app.get('/info', (req, res) => res.status(200).json({
    status: 'UP',
    port: process.env.PORT,
    name: process.env.NAME
}));

const dir = `${__dirname}/public/`;

app.use(express.static(dir));

app.get('/*',(req, res) => res.sendFile(path.join(dir, 'index.html')));

const server = http.createServer(app);
server.listen(port, () => console.log('Server running on: ' + port));

axios.post(`http://${process.env.REGISTRY_HOST}:${process.env.REGISTRY_PORT}/registry`, {
    name: process.env.NAME,
    port: port
}).then( () => console.log('Registry done!'))
    .catch((err) => console.log('Registry failed', err));