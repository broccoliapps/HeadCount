var expect = require('chai').expect;
var db = require('./../db/config.js')
var User = require('./../db/models/user.js');

// set manual delay to wait for database connection
setTimeout(function() {}, 1000);

describe('User', function() {

  var testUser = {
    username: 'testUser1234',
    password: 'testPassword1234',
    email: 'testEmail@1234.com'
  }

  // If testUser already exists in database, remove it before continuing
  before(function(done) {
    User.forge(testUser)
    .fetch()
    .then(function(model) {
      if (model) {
        model.destroy()
        .then(function() {
          done();
        });
      } else {
        done();
      }
    });
  });

  // Save testUser to database
  it('should save a new user to database', function(done) {
    User.forge(testUser)
    .save()
    .then(function(model) {
      done();
    })
  });

  // Delete testUser from database after completion
  after(function(done) {
    User.forge(testUser)
    .fetch()
    .then(function(model) {
      if (model) {
        model.destroy()
        .then(function() {
          done();
        });
      } else {
        throw new Error('user not found!');
        done();
      }
    });
  })

});
