const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const uuid = require("uuid");
const path = require("path");
const methodoveride = require("method-override");
app.use(methodoveride("_method"));
app.use(express.urlencoded({ extended: true }));

//setting view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//creating connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "SIGMA_APP",
  password: "26@october",
});

//inserting data
let getrandomuser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};
let q = "INSERT INTO users (id, username, email, password) VALUES ?";
let data = [];
for (let i = 0; i <= 100; i++) {
  data.push(getrandomuser()); //100faker user data
}

//routing
//for home page get request for counting total users
app.get("/", (req, res) => {
  let count = "SELECT COUNT(*) FROM USERS";
  connection.query(count, (err, results) => {
    if (err) throw err;
    let totaluser = results[0]["COUNT(*)"];
    res.render("home.ejs", { totaluser });
  });
});

//for showing user data
app.get("/users", (req, res) => {
  let users = "SELECT * FROM users";
  connection.query(users, (err, results) => {
    if (err) throw err;
    res.render("show.ejs", { users: results });
  });
});

//for editing user data
app.get("/users/edit/:id", (req, res) => {
  let { id } = req.params;
  let users = `SELECT * FROM users WHERE id='${id}'`;
  connection.query(users, (err, results) => {
    if (err) throw err;
    let user = results[0];
    res.render("edit.ejs", { user });
  });
});

//for updating user data to database
app.patch("/users/:id", (req, res) => {
  let { id } = req.params;
  let { password: formpass, username: newusername } = req.body;
  let users = `SELECT * FROM users WHERE id='${id}'`;
  connection.query(users, (err, results) => {
    if (err) throw err;
    let user = results[0];
    if (formpass !== user.password) {
      res.send("Wrong Password!!");
    } else {
      let update = `UPDATE users SET username='${newusername}' WHERE id='${id}'`;
      connection.query(update, (err, results) => {
        if (err) throw err;
        res.redirect("/users");
      });
    }
  });
});
//for adding new user
app.get("/register", (req, res) => {
  res.render("register.ejs");
});
app.post("/register", (req, res) => {
  let { username, email, password } = req.body;
  let id = uuid.v4();
  let insert = `INSERT INTO users (id, username, email, password) VALUES ('${id}','${username}','${email}','${password}')`;
  connection.query(insert, (err, results) => {
    if (err) throw err;
    res.redirect("/users");
  });
});
//for deleting user data
app.delete("/users/delete/:id", (req, res) => {
  let { id } = req.params;
  let users = `SELECT * FROM users WHERE id='${id}'`;
  connection.query(users, (err, results) => {
    if (err) throw err;
    let user = results[0];
    let { password: formpass } = req.body;
    if (formpass !== user.password) {
      res.send("Wrong Password!!");
    } else {
      let del = `DELETE FROM users WHERE id='${id}'`;
      connection.query(del, (err, results) => {
        if (err) throw err;
        res.redirect("/users");
      });
    }
  });
});

//setting route
app.listen(8080, () => {
  console.log("server is running on port 8080");
});
