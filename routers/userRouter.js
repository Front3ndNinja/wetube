const express = require("express");
const {
  user,
  userDetail,
  editProfile,
  changePassword,
} = require("../controllers/userController");

const routes = require("../routers");

const userRouter = express.Router();

// userRouter.get(routes.users, user);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetail(), userDetail);

module.exports = userRouter;
