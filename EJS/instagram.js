const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

app.set("view engine ", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.listen(port, () => {
  console.log(`app is listening to the port ${port}`);
});

app.get("/ig/:username", (req, res) => {
  let { username } = req.params;
  const instadata = require("./data.json");
  let data = instadata[username];
  console.log(data);
  if (data) {
    res.render("instagram.ejs", { data });
  } else {
    res.render("error.ejs");
  }
});
