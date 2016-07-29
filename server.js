var express = require('express');
var path = require('path');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var swig = require('swig');
swig.setDefaults({cache: false});


var app = express();
app.use(express.static(path.join(__dirname, 'node_modules')));

app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: false }));
app.engine('html',swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/', function(req,res,next){
	res.render('home', {title: 'Home'});
});

app.use('/products', require('./routes/products.routes'));

app.listen(process.env.PORT, function(){
	console.log("listening on " + process.env.PORT)
});
