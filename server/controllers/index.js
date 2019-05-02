var models = require('../models');


module.exports = {
  messages: {
    get: function (req, res) {

      models.messages.get(req, res);
    }, // a function which handles a get request for all messages

    // (function (err, results){
    //   if (err) {
    //    console.log(err)
    //   } else {
    //  res.json(results)
    //   }
    // })

    post: function (req, res) {
      models.messages.post(req, res);
    }
      // a function which handles posting a message to the database
  },

//   (function (err,results){
//     if (err) {
//       throw err
//     } else {
//       end('results')
//     }
//   })
//  }

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(req, res);
    },
    post: function (req, res) {
      models.users.post(req);
    }
  }
};

