const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.listen(3000);
app.get("/", (req, res) => {
  res.send("Go to number/yourNum to check if yourNum is prime or composite");
});
app.get("/number", (req, res) => {
  res.send("Go to number/:num to check if :num is prime or composite");
});
app.get("/number/:num", (req, res) => {
  res.render("main", { num: req.params.num });
});
