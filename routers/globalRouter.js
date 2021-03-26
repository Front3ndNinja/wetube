const express = require("express");
const {
  getJoin,
  postJoin,
  getLogin,
  postLogin,
  logout,
} = require("../controllers/userController");
const { home, search } = require("../controllers/videoController");
const routes = require("../routers");
const globalRouter = express.Router();

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.home, home);

globalRouter.get(routes.logout, logout);

globalRouter.get(routes.search, search);

module.exports = globalRouter;
