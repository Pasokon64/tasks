const { Router } = require('express');
const auth = require('./middlewares/auth');

const userController = require('./controllers/UserController');
const taskController = require('./controllers/TaskController');
const listController = require('./controllers/ListController');

const routes = Router();

routes.get('/api/user/', userController.index);
routes.post('/api/user/auth', userController.auth);
routes.post('/api/user/register', userController.register);
routes.post('/api/user/validate', auth, userController.validate);

routes.get('/api/task', auth, taskController.index);
routes.get('/api/task/:list', auth, taskController.listTasks);
routes.post('/api/task/create', auth, taskController.create);
routes.put('/api/task/update/:id', auth, taskController.update);
routes.delete('/api/task/delete/:id', auth, taskController.delete);

routes.get('/api/list', auth, listController.index);
routes.get('/api/list/:id', auth, listController.show);
routes.post('/api/list/create', auth, listController.create);
routes.put('/api/list/update/:id', auth, listController.update);
routes.delete('/api/list/delete/:id', auth, listController.delete);

module.exports = routes;