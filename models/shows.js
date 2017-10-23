var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
  mongoose.Promise = global.Promise;


var ShowSchema = new Schema({
  show: String,
  date: String,
  img: String,
  poster: String,
  overview: String,
  backdrop: String,
  users: String
})

var Shows = mongoose.model('Shows', ShowSchema);

module.exports = Shows;
