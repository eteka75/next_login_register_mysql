const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const expressSession = require("express-session");
const cookiesParser = require("express-session");
const bcrypt = require("bcrypt");

//const db = null; //require("./db");
const db = require("./db");
const port = 3002;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(
//   cors({
//     origin: "http://localhost:3001/",
//     credentials: true,
//   })
// );
app.use(
  expressSession({
    secret: "mySecret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(
  cors({
    origin: "http://localhost:3002/",
    credentials: true,
  })
);

app.use(cookiesParser("mySecret"));
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/register", (req, res) => {
  let username = req.body.username;
  const password = req.body.password;
  console.log("PASSWORD", req.body.password);
  //res.send({ data: req.body });

  const query = "INSERT INTO users(username, password) values(?,?)";
  const query2 = "SELECT * FROM users WHERE username=?";

  db.query(query2, [username], (err, result) => {
    if (err) {
      throw err;
    }
    if (result.length > 0) {
      res.send({ message: "USername already existe !" });
    }
    if (result.length === 0) {
      const hashPassword = bcrypt.hash(password, 10);
      db.query(query, [username, hashPassword], (err, result) => {
        if (err) {
          throw err;
        }
        res.send({ message: "User created" });
      });
    }
  });
});
app.listen(port, () => {
  console.log("Server started on port " + port);
});
