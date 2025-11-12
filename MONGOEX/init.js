const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
main()
  .then((res) => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");
}

let chats = [
  {
    sender: "Hemant Prakash",
    To: "Ashish kumar",
    message: "send me notes for exam",
  },
  {
    sender: "Ashish kumar",
    To: "shaurya lala",
    message: "hi lala",
  },
];

Chat.insertMany(chats);
