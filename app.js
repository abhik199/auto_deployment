const express = require("express");
const app = express();
const path = require("path");

const port = process.env.PORT || 4100;

app.use(express.static("public"));

app.get("/", function (req, res) {
  return res.render("index");
});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.listen(port, function () {
  console.log(`listening on ${port}`);
});
