var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var config={
    user:'ash9876',
    database:'ash9876',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password:process.env.DB_PASSWORD
};

var pool=new Pool(config);

var app = express();
app.use(morgan('combined'));

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/person-db', function (req, res) {
   var username=req.body.username;
    var password=req.body.password;
    
  pool.query("SELECT * FROM person WHERE username=" +"'"+ username+"'",function(err,result){
      if(err){
          res.status(500).send(err.toString());
      } else{
          res.send(JSON(stringify(result.rows)));
      }
  });
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/index.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/more.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'more.html'));
});

app.get('/wish.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'wish.html'));
});

app.get('/me.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'me.html'));
});

app.get('/signup.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'signup.html'));
});

app.get('/login.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'login.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/list.html', function (req, res){
  res.sendFile(path.join(__dirname, 'ui','list.html'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
