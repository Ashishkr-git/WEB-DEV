const mongoose = require("mongoose");

main()
  .then((res) => {
    console.log("Connected to MongoDB" + res);
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

//defining schema
const users = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  password: String,
  date: { type: Date, default: Date.now },
  time: { type: String, default: new Date().toLocaleTimeString() },
});

//model
const User = mongoose.model("User", users);

//creating a document
// const user2 = new User({
//   name: "Reshit Mishra",
//   email: "reshit.mishra@gmail.com",
//   age: 30,
//   password: "password123",
// });

// saving the document
// user2
//   .save()
//   .then((res) => {
//     console.log(`User saved successfully: ${res}`);
//   })
//   .catch((err) => {
//     console.log("Error saving user:", err);
//   });

// inserting multiple documents
// User.insertMany([
//   {
//     name: "Shaurya Shrivastava",
//     email: "shaura@example.com",
//     age: 22,
//     password: "pass1234",
//   },
//   {
//     name: "Saurav Mishra",
//     email: "saurav.mishra@gmail.com",
//     age: 30,
//     password: "password123",
//   },
// ])
//   .then((res) => {
//     console.log(`Users inserted successfully: ${res}`);
//   })
//   .catch((err) => {
//     console.log("Error inserting users:", err);
//   });

User.find({ age: { $lt: 25 } }).then((response) => {
  console.log(response);
});
