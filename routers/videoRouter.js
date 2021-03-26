const express = require("express");
const {
  videoDetail,
  deleteVideo,
  editVideo,
  getUpload,
  postUpload,
} = require("../controllers/videoController");

const routes = require("../routers");

const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, postUpload);

videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.deleteVideo, deleteVideo);
videoRouter.get(routes.editVideo, editVideo);

module.exports = videoRouter;
