const mongoose = require("mongoose");

main()
  .then((res) => {
    console.log("Connected to MongoDB" + res);
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, required: true, min: [0, "Price cannot be negative"] },
  discount: { type: Number, default: 25 },
});

const Book = mongoose.model("Book", bookSchema);

let book1 = new Book({
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  price: 10.99,
});
book1.save().then((res) => {
  console.log(res);
});
