// const mysql = require("mariadb");

// const connection = mysql.createPool({
//   host: "localhost",
//   user: "gdbr3085_huge",
//   port: 3306,
//   password: "uro0ccPLbaI2UhgCbkqz",
//   database: "gdbr3085_hugeapi",
// });
// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "gdbr3085_huge",
//   port: 3306,
//   password: "",
//   database: "gdbr3085_hugeapi",
// });
// connection.connect();

// connection.query("SELECT * FROM users", (err, rows, fields) => {
//   if (err) throw err;

//   console.log("The solution is: ", rows[0].name);
// });

// connection.end();
const mariadb = require("mariadb");

const init = (req, res) => {
  let result;
  const pool = mariadb.createPool({
    host: "localhost",
    user: process.env.mariadb_user,
    database: "gdbr3085_hugeapi",
    password: process.env.mariadb_password,
    connectionLimit: 5,
  });
  return pool
    .getConnection()
    .then((conn) => {
      conn
        .query("SELECT * FROM users")
        .then((rows) => {
          console.log(rows[1]); //[ {val: 1}, meta: ... ]
          //Table must have been created before
          // " CREATE TABLE myTable (id int, val varchar(255)) "
          // return conn.query("INSERT INTO users value (?, ?)", [1, "mariadb"]);
          result = rows;
          res.send(result);
        })
        .then((res) => {
          // console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
          conn.end();
          return res;
        })
        .catch((err) => {
          //handle error
          console.log(err);
          conn.end();
        });
    })
    .catch((err) => {
      //not connected
    });
};
module.exports = init;
