var db = require('./../config.js');

var User = db.Model.extend({
  tableName: 'users',
  hasTimestamps: true
});

module.exports = db.model('User', User);
