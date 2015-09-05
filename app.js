var express = require('express');
var load = require('express-load');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();

var port = 3000;
app.set('views',__dirname + '/views');
app.set('view engine','ejs');
app.use(cookieParser('chatter'));
app.use(session({resave:false, saveUninitialized: false, secret: 'secret'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride());
app.use(express.static(__dirname + '/public'));

load('models')
    .then('controllers')
    .then('routes')
    .into(app);


app.listen(port, function(){
   console.log('Server running on port:' + port);
});