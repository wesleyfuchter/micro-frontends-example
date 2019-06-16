const baseServer = require('../base-server');
const express = require('express');
const http = require('http');
const app = express();
const port = process.env.PORT || '3000';
const proxy = require('http-proxy-middleware');
const bodyParser = require('body-parser');
const routes = [];
app.use(bodyParser());

const createProxy = (path, target) => {
    if (!routes.find(route => route.serviceName === path && route.url === target)) {
        routes.push({serviceName: path, url: target});
        app.use(path, proxy({target, changeOrigin: true, pathRewrite: {[`^${path}`]: ''}}));
    }
};

app.get('/info', (req, res) => res.status(200).json(baseServer.getInfoResponse(process.env)));

app.get('/routes', (req, res) => res.status(200).json(routes));

app.post('/registry', (req, res) => {
    createProxy(`/${req.body.name}`, `http://${process.env.HOST}:${req.body.port}/`);
    res.sendStatus(201);
});

const server = http.createServer(app);
server.listen(port, () => console.log('Server running on: ' + port));
