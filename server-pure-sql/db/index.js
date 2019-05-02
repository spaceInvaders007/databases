var mysql = require('mysql');


var Connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'chat'
});
Connection.connect();

module.exports = Connection


// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


