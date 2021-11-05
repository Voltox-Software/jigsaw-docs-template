const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "build_local")));

app.get("/dev/ping", function (req, res) {
  return res.send("pong");
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "build_local", "index.html"));
});

app.listen(
  process.env.PORT || 8080,
  console.log(`Docs listening on ${process.env.PORT || 8080}`)
);
