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

var app = express();
app.use(morgan('combined'));


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

var pool = new Pool(config);

app.post('/my-db',function(req,res){
    pool.query('SELECT * FROM user', function(req,res){
        if(err){
        res.status(500).send(err.toString());
        }else{
            res.send(JSON.stringify(result));
        }
    });
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
