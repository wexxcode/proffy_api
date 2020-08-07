import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsContoller';

const routes = express.Router();

const classeSControllers = new ClassesController();
const connections = new ConnectionsController();

routes.get('/classes', classeSControllers.index);
routes.post('/classes', classeSControllers.create);
routes.get('/connections', connections.index);
routes.post('/connections', connections.create);


export default routes;