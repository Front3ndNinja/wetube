const express = require("express");
const {
  videos,
  upload,
  videoDetail,
  deleteVideo,
  editVideo,
} = require("../controllers/videoController");

const routes = require("../routers");

const videoRouter = express.Router();

videoRouter.get(routes.videos, videos);

videoRouter.get(routes.upload, upload);

videoRouter.get(routes.videoDetail, videoDetail);

videoRouter.get(routes.editVideo, editVideo);

videoRouter.get(routes.deleteVideo, deleteVideo);

module.exports = videoRouter;
