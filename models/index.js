var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/Project01", {useMongoClient: true});

module.exports.Show = require("./shows.js");
