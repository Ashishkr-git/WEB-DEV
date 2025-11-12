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
  adresses: [
    {
      _id: false,
      location: String,
      city: String,
    },
  ],
});

const User = mongoose.model("User", userSchema);

const addUsers = async () => {
  let User1 = new User({
    username: "Ashish kumar",
    adresses: [
      {
        location: "ST Jhon's Colony Lakhanpur",
        city: "Varanasi",
      },
    ],
  });
  User1.adresses.push({
    location: "GB ROAD KASNA NEAR HYGIENCE PHARMACY",
    city: "Greater Noida",
  });
  let result = await User1.save();
  console.log(result);
};

addUsers();
