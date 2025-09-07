const { v4: uuidv4 } = require("uuid");
const id = uuidv4();
const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const methodoveride = require("method-override");
app.use(methodoveride("_method"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

let todolist = [];
app.get("/home", (req, res) => {
  res.render("home.ejs", { todolist });
});
app.get("/home/addtask", (req, res) => {
  res.render("addtask.ejs");
});
app.post("/home", (req, res) => {
  let { task } = req.body;
  let id = uuidv4();
  todolist.push({ id, task });
  res.redirect("/home");
});

app.get("/home/edittask/:id", (req, res) => {
  const { id } = req.params;
  const task = todolist.find((t) => t.id == id);
  res.render("edittask.ejs", { task });
});

app.patch("/home/edittask/:id", (req, res) => {
  const { id } = req.params;
  const task = todolist.find((t) => t.id == id);
  task.task = req.body.content;
  res.redirect("/home");
});

app.listen(port, () => {
  console.log(`app is listening to the port ${port}`);
});
