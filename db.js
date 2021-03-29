const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

// module.exports = userRouter;
const handleOpen = () => {
  console.log("connected to db");
};

const handleError = () => {
  console.log(`error on db connection ${error}`);
};

db.once("open", handleOpen);
db.on("error", handleError);
