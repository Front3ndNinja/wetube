const express = require("express");
const routes = require("../routers");
const videoRouter = express.Router();

videoRouter.get(routes.videos, (req, res) => {
  res.send("videos");
});

videoRouter.get(routes.upload, (req, res) => {
  res.send("upload");
});

videoRouter.get(routes.videoDetail, (req, res) => {
  res.send("video details");
});

videoRouter.get(routes.editVideo, (req, res) => {
  res.send("edit video");
});

videoRouter.get(routes.deleteVideo, (req, res) => {
  res.send("delete video");
});

module.exports = videoRouter;
