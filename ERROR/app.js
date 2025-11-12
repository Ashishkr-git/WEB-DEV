const express = require("express");
const app = express();
const ExpressError = require("./expresserror");

const checktoken = (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    next();
  }
  throw new ExpressError(401, "Unauthorized!");
};

app.get("/api", checktoken, (req, res) => {
  res.send("welcome to database");
});

app.get("/err", (req, res) => {
  abcd = abcd;
});

app.get("/admin",(req,res)=>{
    throw new ExpressError(403,"ACCESS TO ADMIN IS FORBIDDEN")
})
app.use((err, req, res, next) => {
  let { status = 500, message } = err;
  res.status(status).send(message);
});

app.listen(8080, () => {
  console.log("app is listening on port 8080");
});
