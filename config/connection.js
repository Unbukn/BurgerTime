// Set up MySQL connection.
var mysql = require("mysql");
// establish connection to the database
let connection = mysql.createConnection({
  host: "",
  port: 3306,
  user: "admin",
  password: "Password123",
  database: "burger_db"
});

// Make connection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for ORM to use.
module.exports = connection;
