var express = require('express');
var router = express.Router();

var models = require('../products.model.js');

router.get('/', function(req,res,next){
	var products = models.list();
	console.log(products);
	res.render('home', {title: 'Home'})

});


module.exports = router;