var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {

      var sql = 'SELECT messages.id, messages.text, messages.roomname, users.username from messages left outer join users on (messages.userId = users.id) order by messages.id desc ';
      db.query(sql, function(err, results) {
        if (err){
          console.log(err)
        }
        callback(results)
      } )
    },

    post: function (params, callback) {
      var sql = "INSERT INTO messages(text, userId, roomname) VALUES (?,(select id from users where username = ? limit 1),?)";
      db.query(sql, params, function (err, results) {
        if (err) {
         // console.log(err)
        } else {
          callback(results)
        }
      });

        }
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var sql = 'SELECT * FROM users';
      db.query(sql, function(err, results) {
        if (err){
          console.log(err)
        }
        callback(result)
      } )

    },
    post: function (params, callback) {
      var sql = 'INSERT INTO users(username) values (?)';
      db.query(sql, params, function(err, results) {
        if (err){
          console.log(err)
        }
        callback(results)
      } )
    }
  }
}