var db = require("./models");

var showList = [{
  title: 'Mad Men'
}, {
  title: 'Mash'
}, {
  title: 'Game of Thrones'
}, {
  title: 'The Office'
}];

db.Shows.remove({}, function(err, shows){
  db.Shows.create(showList, function(err, shows){
    if (err) { return console.log('Error', err); }
    console.log("all shows:", shows);
    process.exit();
  });
});
