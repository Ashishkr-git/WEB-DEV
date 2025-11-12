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

const orderSchema = new Schema({
  item: String,
  price: Number,
});

const customerSchema = new Schema({
  name: String,
  email: String,
  orders: [{ type: Schema.Types.ObjectId, ref: "Order" }],
});

customerSchema.post("findOneAndDelete", async (customer) => {
  if (customer.orders.length) {
    let result = await Order.deleteMany({ _id: { $in: customer.orders } });
    console.log(result);
  }
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

//add customer

const addCustomer = async () => {
  let newcustomer = new Customer({
    name: "Hemant Prakash",
    email: "hemantprakash7766@gmail.com",
  });

  let neworder = new Order({
    item: "fried Rice",
    price: 60,
  });

  newcustomer.orders.push(neworder);
  await neworder.save();
  await newcustomer.save();
  console.log(newcustomer);
};
//find customer and delete customer

const deletecustomer = async () => {
  let customerdata = await Customer.findByIdAndDelete(
    "68d586991c8854bd75816f92"
  );
};

deletecustomer();
