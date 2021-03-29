import "./db";
import app from "./app";
import "./models/Video";
import "./models/Comment";
const PORT = process.env.PORT || 4000;

function handleListening() {
  console.log(`listening on : ${PORT}`);
}

app.listen(PORT, handleListening);
