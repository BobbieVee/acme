var express = require('express');
var path = require('path');
var methodOverride = require('method-override');
var swig = require('swig');


var app = express();
app.use(express.static(path.join(__dirname, 'node_modules')));

app.use(methodOverride('_method'));
app.engine('html',swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
swig.setDefaults({cache: false});

var routes = require('./routes/products.routes.js');
app.use('/',routes);
app.get('/', function(req,res,next){
	console.log('list products')
	res.render('home', {title: 'Home'});
});

app.delete('/products/:name', function(req,res){
	console.log(req.params.name)
	res.redirect('/products')
})

app.listen(process.env.PORT, function(){
	console.log("listening on " + process.env.PORT)
});