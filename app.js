const express = require("express");
const app = express();

const port = process.env.PORT || 4100;

app.get("/", function (req, res) {
  return res.json({ message: "my personal server" });
});

app.get("/api", function (req, res) {
  return res.json({
    message:
      "To use nested populate in Mongoose, you can chain multiple calls to the populate() method in a query chain. For example, let's say you have the following schema:",
  });
});

app.listen(port, function () {
  console.log(`listening on ${port}`);
});
