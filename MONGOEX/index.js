const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodoverride = require("method-override");
const ExpressError = require("./expresserror");

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
  await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");
}

//all chats route
app.get(
  "/chats",
  asyncWrap(async (req, res, next) => {
    const chats = await Chat.find({});
    res.render("chats", { chats });
  })
);

//new chat route
app.get("/chats/newchat", (req, res) => {
  res.render("newchat");
});

//post chat route
app.post(
  "/chats",
  asyncWrap(async (req, res, next) => {
    const { sender, To, message } = req.body;
    let chat = new Chat({ sender, To, message });
    await chat.save();
    res.redirect("/chats");
  })
);

function asyncWrap(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch((err) => next(err));
  };
}

//show route
app.get(
  "/chats/:id",
  asyncWrap(async (req, res, next) => {
    let { id } = req.params;
    const chat = await Chat.findById(id);
    if (!chat) {
      next(new ExpressError(404, "chat not found"));
    }
    res.render("edit.ejs", { chat });
  })
);

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

const handlevalidationerr = (err) => {
  console.log(err.message);
  return err;
};
app.use((err, req, res, next) => {
  console.log(err.name);
  if (err.name === "ValidationError") {
    console.log("this was a validation error.please follow the rules");
  }
  next(err);
});
//errorhandlinng middleware
app.use((err, req, res, next) => {
  let { status = 500, message = "some error occured" } = err;
  res.status(status).send(message);
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
