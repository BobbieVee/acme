var express = require('express');
var router = express.Router();

var models = require('../products.model.js');
var products = models.list();

router.get('/', function(req,res){
	res.render('home', {title: 'Home'})
});

router.get('/products/', function(req, res){
	res.render('product',{title: 'Products', products: products})
})

router.delete('/products/:name', function(req,res){
	console.log('Delete =>', req.params.name);
	models.remove(req.params.name);
	res.redirect('/products/');
})


module.exports = router;