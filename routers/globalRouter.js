const express = require("express");
const { join, login, logout } = require("../controllers/userController");
const { home, search } = require("../controllers/videoController");
const routes = require("../routers");
const globalRouter = express.Router();

globalRouter.get(routes.home, home);

globalRouter.get(routes.join, join);

globalRouter.get(routes.login, login);

globalRouter.get(routes.logout, logout);

globalRouter.get(routes.search, search);

module.exports = globalRouter;
