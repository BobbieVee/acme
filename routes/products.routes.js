var express = require('express');
var router = express.Router();

var Product = require('../products.model.js');


router.get('/', function(req, res){
	res.render('products',{title: 'Products', products: Product.list() });
});

router.post('/', function(req, res){
  Product.add(req.body.name);
	res.redirect('/products');
});

router.delete('/:id', function(req,res){
	Product.remove(req.params.id*1);
	res.redirect('/products');
});


module.exports = router;
