const { Router } = require('express');
const auth = require('./middlewares/auth');

const userController = require('./controllers/UserController');
const taskController = require('./controllers/TaskController');

const routes = Router();

routes.get('/api/user/', userController.index);
routes.post('/api/user/auth', userController.auth);
routes.post('/api/user/register', userController.register);

routes.get('/api/task', auth, taskController.index);
routes.post('/api/task/create', auth, taskController.create);

module.exports = routes;