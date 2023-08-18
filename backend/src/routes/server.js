const express = require("express");

const api = express();

const routes = require('../routes/route');

api.use(express.json());

api.use(routes);

api.listen(4200);