const express = require('express');
const BoardController = require('../controllers/boardController');

const routes = express.Router();

routes.get('/all',BoardController.All);

routes.post('/create',BoardController.Create);

routes.post('/update',BoardController.Update);

routes.get('/findOne',BoardController.FindOne);

routes.post('/delete',BoardController.Delete);

module.exports = routes;


