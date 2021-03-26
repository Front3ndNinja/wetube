import routes from "../routers";

const videos = require("../db");

export const home = (req, res) => {
  res.render("home", { pageTitle: "Home", videos });
};

export const search = (req, res) => {
  const searchingBy = req.query.term;
  res.render("search", {
    pageTitle: "Search",
    searchingBy: searchingBy,
    videos,
  });
};

export const getUpload = (req, res) => {
  res.render("upload", { pageTitle: "Upload" });
};

export const postUpload = (req, res) => {
  const {
    body: { file, title, description },
  } = req;
  res.redirect(routes.videoDetail(343434));
};

export const videoDetail = (req, res) => {
  res.render("videoDetail", { pageTitle: "Video Detail" });
};

export const editVideo = (req, res) => {
  res.render("editVideo", { pageTitle: "EditVideo" });
};

export const deleteVideo = (req, res) => {
  res.render("deleteVideo", { pageTitle: "deleteVideo" });
};
