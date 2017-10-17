var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ShowSchema = new Schema({
  title: String,
  imageUrl: String,
  genre: String,
  description: String,
})

var Shows = mongoose.model('Shows', ShowSchema);

module.exports = Shows
