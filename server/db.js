const mysql = require("mysql");
console.log(mysql);
const db = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: null,
  database: "next_login",
});

module.exports = db;
