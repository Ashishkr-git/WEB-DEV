const express = require("express");
const app = express();

let port = 8080;

app.listen(port, () => {
  console.log("app is listening on port");
});

app.get("/apple", (req, res) => {
  res.send("hello i am listening");
});
app.get("/mango", (req, res) => {
  res.send("you contacted mango path");
});

app.get("/*splat", (req, res) => {
  res.send("this path doesnt exist..");
});
