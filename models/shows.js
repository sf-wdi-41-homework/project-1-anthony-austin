var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
  mongoose.Promise = global.Promise;


var ShowSchema = new Schema({
  title: String,
  users: String,
  // imageUrl: String,
  // genre: String,
  // description: String,
})

var Shows = mongoose.model('Shows', ShowSchema);

module.exports = Shows;
