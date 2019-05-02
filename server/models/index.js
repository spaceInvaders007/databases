var db = require('../db');
//requires controller - var controllers = require('../controllers');

module.exports = {
  messages: {
    get: function (err) {


      if (err) throw err;
      var sql = 'SELECT * FROM messages';
      db.query(sql, function(err, result) {
        if (err) throw err;
        console.log(result)
      } )
    }, // a function which produces all the messages
    post: function () {

      var sql = "INSERT INTO messages (username, text) VALUES ('Michelle', 'Blue Village 1')";
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {

    },
    post: function () {}
  }
};

