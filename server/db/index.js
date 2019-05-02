var mysql = require('mysql');
const Sequelize = require('sequelize');

var orm = new Sequelize('chat', 'root', '');

var User = orm.define('User', {
  username: Sequelize.STRING
});

var Message = orm.define('Message', {
  text: Sequelize.STRING,
  roomname: Sequelize.STRING
});

User.hasMany(Message);
Message.belongsTo(User);

User.sync();

var mysql = require('mysql');

var Connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'chat'
});
Connection.connect();

module.exports = Connection;


// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


