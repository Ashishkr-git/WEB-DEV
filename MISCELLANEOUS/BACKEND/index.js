const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
app.get("/register", (req, res) => {
  let { username, password } = req.query;
  res.send(`welcome to get ${username}`);
});
app.post("/register", (req, res) => {
  console.log(req.body);
  let { username, password } = req.body;
  res.send(`standard post response : ${username}`);
});
