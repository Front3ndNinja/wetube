import app from "./app";

const PORT = 4000;

function handleListening() {
  console.log(`listening on : ${PORT}`);
}

app.listen(PORT, handleListening);
