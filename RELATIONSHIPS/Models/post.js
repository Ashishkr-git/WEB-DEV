const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then((res) => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationdemon");
}

const userSchema = new Schema({
  username: String,
  email: String,
});

const postSchema = new Schema({
  content: String,
  likes: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

const adddata = async () => {
  let user = await User.findOne({ username: "Ashish kumar" });

  let post2 = new Post({
    content: "This is my second post",
    likes: 15,
  });
  post2.user = user;
  await post2.save();
  console.log(post2);
};

const getdata = async () => {
  let posts = await Post.find({}).populate("user", "username");
  console.log(posts);
};

getdata();
