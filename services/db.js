const mariadb = require("mariadb");

const pool = mariadb.createPool({
  host: "localhost",
  user: process.env.mariadb_user,
  database: "gdbr3085_hugeapi",
  password: process.env.mariadb_password,
  connectionLimit: 5,
});

const init = (req, res) => {
  return pool
    .getConnection()
    .then((conn) => {
      conn
        .query("SELECT * FROM users")
        .then((rows) => {
          //Table must have been created before
          // " CREATE TABLE myTable (id int, val varchar(255)) "
          // return conn.query("INSERT INTO users value (?, ?)", [1, "mariadb"]);
          res.send(rows);
        })
        .then((res) => {
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
      console.error('impossible to connect to database', err)
    });
};

const insertUser = (req, res) => {
  return pool
    .getConnection()
    .then((conn)=>{
      return conn.query("INSERT INTO users value(?, ?, ?)", [req.user, req.email, req.password])
    })
    .then(res =>{
      conn.end()
      return res
    }).catch(err => console.log('error:', err))
}
module.exports = {
  init,
  insertUser

};
