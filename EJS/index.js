const express = require("express");
const app = express();
const path = require("path");
const port = 8080;
app.set("view engine", "ejs"); //this is use to render the responses
app.set("views", path.join(__dirname, "/views"));
app.listen(port, () => {
  console.log(`app is listening... on ${port}`);
});
app.get("/", (req, res) => {
  res.render("home.ejs"); //this is EJS feature
});
app.get("/rolldice", (req, res) => {
  let dicevalue = Math.floor(Math.random() * 6) + 1
  res.render("rolldice.ejs",{dicevalue});
});
