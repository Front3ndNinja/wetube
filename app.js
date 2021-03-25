const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const userRouter = require("./routers/userRouter");
const videoRouter = require("./routers/videoRouter");
const globalRouter = require("./routers/globalRouter");

const routes = require("./routers");

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

// const handleHome = (req, res) => {
//   res.send("hello from home ");
// };

// const handleProfile = (req, res) => {
//   res.send("hello from profile ");
// };

// app.get("/", handleHome);
// app.get("/profile", handleProfile);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.users, videoRouter);

module.exports = app;
