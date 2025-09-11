const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodoverride = require("method-override");
app.use(methodoverride("_method"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

main()
  .then((res) => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

//all chats route
app.get("/chats", async (req, res) => {
  try {
    const chats = await Chat.find({});
    res.render("chats", { chats });
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
});

//new chat route
app.get("/chats/newchat", (req, res) => {
  res.render("newchat");
});
//post chat route
app.post("/chats", async (req, res) => {
  const { sender, To, message } = req.body;
  let chat = new Chat({ sender, To, message });
  await chat.save();
  res.redirect("/chats");
});

//edit chat route
app.get("/chats/:id/edit", async (req, res) => {
  const { id } = req.params;
  const chat = await Chat.findById(id);
  res.render("edit", { chat });
});

app.patch("/chats/:id", async (req, res) => {
  const { id } = req.params;
  const { sender, To, message } = req.body;
  console.log(req.body);
  await Chat.findByIdAndUpdate(
    id,
    { sender, To, message },
    { runValidators: true, new: true }
  );
  res.redirect("/chats");
});

app.delete("/chats/:id/delete", async (req, res) => {
  const { id } = req.params;
  await Chat.findByIdAndDelete(id);
  res.redirect("/chats");
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
