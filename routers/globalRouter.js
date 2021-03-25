const express = require("express");
const routes = require("../routers");
const globalRouter = express.Router();

globalRouter.get(routes.home, (req, res) => {
  res.send("hello from global home");
});

globalRouter.get(routes.join, (req, res) => {
  res.send("hello from global join");
});

globalRouter.get(routes.login, (req, res) => {
  res.send("hello from global login");
});

globalRouter.get(routes.logout, (req, res) => {
  res.send("hello from global logout");
});

globalRouter.get(routes.search, (req, res) => {
  res.send("hello from global search");
});

module.exports = globalRouter;
