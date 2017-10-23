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
    show: req.body.show,
    date: req.body.date,
    img: req.body.img,
    poster: req.body.poster,
    overview: req.body.overview,
    backdrop: req.body.backdrop,
    users: req.body.users
  });
  newShow.save(function (err, show) {
    if (err) {
      return console.log("save error: " + err)
    }
    console.log(newShow);
    res.render('index')
  });
});


app.get('/api/shows', function(req, res) {
  db.Show.find()
  .exec(function (err, shows) {
    if (err) {
      res.json({
        "err": err
      });
    };
    res.json(shows)
    });
  });






app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
