const express = require("express");
const {
  videoDetail,
  deleteVideo,
  getEditVideo,
  postEditVideo,
  getUpload,
  postUpload,
} = require("../controllers/videoController");
const { uploadVideo } = require("../middleware");
const routes = require("../routers");

const videoRouter = express.Router();

// Upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

// Video Details
videoRouter.get(routes.videoDetail(), videoDetail);

// Edit Video
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

// Delete Video
videoRouter.get(routes.deleteVideo(), deleteVideo);

module.exports = videoRouter;
