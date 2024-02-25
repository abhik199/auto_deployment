const express = require("express");
const app = express();

const port = process.env.PORT || 4800;

app.get("/", function (req, res) {
  return res.json({ message: "this is testing server" });
});

app.listen(port, function () {
  console.log(`listening on ${port}`);
});
