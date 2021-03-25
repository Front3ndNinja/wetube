const express = require("express");
const {
  user,
  userDetail,
  editProfile,
  changePassword,
} = require("../controllers/userController");

const routes = require("../routers");

const userRouter = express.Router();

userRouter.get(routes.users, user);
userRouter.get(routes.userDetail, userDetail);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);
module.exports = userRouter;
