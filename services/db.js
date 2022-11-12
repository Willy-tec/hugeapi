const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "gdbr3085_huge",
  port: 3306,
  password: "uro0ccPLbaI2UhgCbkqz",
  database: "gdbr3085_hugeapi",
});
// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "gdbr3085_huge",
//   port: 3306,
//   password: "",
//   database: "gdbr3085_hugeapi",
// });
connection.connect();

connection.query("SELECT * FROM users", (err, rows, fields) => {
  if (err) throw err;

  console.log("The solution is: ", rows[0].name);
});

connection.end();

module.exports = connection;
