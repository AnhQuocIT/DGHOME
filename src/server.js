const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('model-data.json');
const middlewares = jsonServer.defaults({
    static: './dist'
});
const port = process.env.PORT || 3001;

server.use(middlewares);
server.use(router);
server.listen(port);