const { v4: uuidv4 } = require("uuid");
const id = uuidv4();
const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

let posts = [];

app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});git 

app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/posts", (req, res) => {
  let { username, content } = req.body;
  let id = uuidv4();
  posts.push({ id, username, content });
  res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((post) => post.id == id);
  res.render("show.ejs", { post });
});
app.patch("/posts/:id", (req, res) => {
  let { id } = req.params;
  console.log(id);
  let newcontent = req.body.content;
  console.log(newcontent);
  let post = posts.find((post) => post.id == id);
  post.content = newcontent;
  console.log(post);
  res.send("patch request is working");
});
app.listen(port, () => {
  console.log(` app is listening on port ${port}`);
});
