var express = require('express'),
  app = express();
var ejsLayouts = require('express-ejs-layouts');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: true
}));


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var db = require('./models');

app.use(ejsLayouts);
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function homepage(req, res) {
  res.render('index');
});

//create a show
app.post('/api/shows', function (req, res) {
  var newShow = new db.Show({
    title: req.body.title,
    users: req.body.users
  });
  newShow.save(function (err, show) {
    if (err) {
      return console.log("save error: " + err)
    }
    res.json(show);
  });
});

// function splitLowercase(threeShows) {
//   upperCase = threeShows.toUpperCase(),
//   upSplit = upperCase.split(',');
//   return upSplit;
// });
//delete a show
app.delete('/api/show/:id', function (req, res) {
  console.log('show delete', req.params);
  var showId = req.params.id;
  db.Show.findOneAndRemove({
    _id: showId
  }, function (err, deletedShow) {
    res.json(deletedShow);
  });
});


app.get('/api/shows', function (req, res) {
  //let shows = db.Show.find()
  db.Show.find()
    .exec(function (err, shows) {
      if (err) {
        res.json({
          "err": err
        })
      }
      console.log(shows)
      res.render('index', {
        'shows': shows
      });
    })
});





app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
