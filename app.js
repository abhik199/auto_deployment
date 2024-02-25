const express = require("express");
const app = express();

const port = process.env.PORT || 4100;

app.get("/", function (req, res) {
  return res.json({ message: "this is testing server" });
});

app.get("/api", function (req, res) {
  return res.json({ message: "abhishek kirar" });
});

app.listen(port, function () {
  console.log(`listening on ${port}`);
});
