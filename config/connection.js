const { connect, connection } = require('mongoose');
// TODO what is the significance of the mongoose connections URL?
connect('mongodb://localhost/socialMediaStartup', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
