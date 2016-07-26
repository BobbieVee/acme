var express = require('express');
var path = require('path');
var swig = require('swig');


var app = express();
app.use(express.static(path.join(__dirname, 'node_modules')));

app.engine('html',swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
swig.setDefaults({cache: false});


app.get('/', function(req,res,next){
	console.log('hey baby')
	res.render('home', {title: 'Home'});
});

app.listen(process.env.PORT, function(){
	console.log("listening on " + process.env.PORT)
});