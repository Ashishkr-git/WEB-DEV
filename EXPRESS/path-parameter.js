const express = require("express");
const app = express();

let port = 3000;
app.listen(port, () => {
  console.log(`app is listening ${port}`);
});
app.get("/:username/:id", (req, res) => {
  let { username, id } = req.params;
  res.send(`Welcome to the page of ${username} with id no ${id}`);
});

app.get("/search", (req, res) => {
  let { q } = req.query;
  if(!q){
    res.send("nothing searched")
  }
  res.send(`search result for query is ${q}`);
});
