const express = require("express");
const app = express();

// middlewares
// app.use((req, res, next) => {
//   console.log("Hi i am 1 middleware");
//   next();
// });

// app.use((req, res, next) => {
//   console.log("Hi i am 2 middleware");
//   next();
// });

//logger  - morgon
// app.use((req, res, next) => {
//   req.time = new Date(Date.now()).toString();
//   console.log(req.method, req.hostname, req.path, req.time);
//   next();
// });

// APIs Token as query string
const checktoken =
  ("/api",
  (req, res, next) => {
    let { token } = req.query;
    if (token === "giveaccess") {
      next();
    }
    throw new Error("invalid token");
  });
app.get("/api", checktoken, (req, res) => {
  res.send("data");
});

//middleware for specific path
app.use("/random", (req, res, next) => {
  console.log("Hi i am random middleware");
  next();
});

//routing


app.get("/", (req, res) => {
  res.send("hi i am root route");
});

app.get("/random", (req, res) => {
  res.send("hi i am random route");
});

app.use((req, res) => {
  res.send("404 not found");
});

app.listen(8080, () => {
  console.log("App is listening on port 8080");
});
