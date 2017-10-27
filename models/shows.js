var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
// No tab necessary
mongoose.Promise = global.Promise;


var ShowSchema = new Schema({
  show: String,
  date: String,
  img: String,
  poster: String,
  overview: String,
  backdrop: String,
  // Should this be an vote count? or an array of users?
  users: String
})

var Shows = mongoose.model('Shows', ShowSchema);

module.exports = Shows;
