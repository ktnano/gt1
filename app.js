const express = require('express');
const app = express();
const morgan = require('morgan');
const parser = require('body-parser')
const fs = require('fs');

app.use(morgan('dev'));
app.use(parser.json());
app.use(parser.urlencoded({extended:true}));
// var path  = 'C:/Users/hp/annyang/views/';
// app.use('*',function(req,res,next){
//   res.set('Access-Control-Allow-origin','*');
//   res.set('Access-Control-Allow-Headers','Content-Type');
//   next();
// });
// app.use(express.static(__dirname+ "views"));
// app.get('/*', function(req,res,next) {
//   data= fs.readFile('./' + req.url,   function (err, data) {
//   res.setHeader('Content-Type', 'text/html');
//   res.send(data);});
//   next();
// });

app.set('view engine', 'ejs');
app.get('/', function(req, res) {  
  res.render('index.ejs', { title: 'The index page!' })
});

app.get('/main', function(req, res) {  
  res.render('notes.ejs', { title: 'The index page!' })
});
app.get('/login', function(req, res) {  
  res.render('index1.ejs', { title: 'The index page!' })
});
app.get('/*', function(req,res,next) {
  data= fs.readFile('./' + req.url,   function (err, data) {
  res.setHeader('Content-Type', 'text/html');
  res.send(data);});
  next();
});
app.listen(2500, () => console.log('Example app listening on port 2500!'))




