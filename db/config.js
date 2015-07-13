var knex =  require('./local_config.js');
var db = require('bookshelf')(knex);
db.plugin('registry');

db.knex.schema.hasTable('users').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('users', function (user) {
      user.increments('id').primary();
      user.string('username', 100).unique();
      user.string('password', 100);
      user.string('email', 100);
      user.string('venmoUsername', 255);
      user.string('venmoDisplayName', 255);
      user.string('venmoUserId', 255);
      user.string('venmoAccessToken', 255);
      user.string('venmoRefreshToken', 255);
      user.timestamps();
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

module.exports = db;
