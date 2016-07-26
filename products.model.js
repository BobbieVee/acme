var _ = require('lodash');

var products = [
	{
		name: "Cervelo Bicycle",
		description: "Aerodynamic Time Trial Bicycle"
	},
	{
		name: "Altra Shoes",
		description: "Zero-drop running shoes"	
	},
	{
		name: "Speedo Swim Goggles",
		description: "Same type that Michael Phelps wears"
	}
];

function list(name, description){
	return _.cloneDeep(products);
}

function remove(name){
	console.log('delete function on ', name);
	products = products.filter(function(product){
		return (product.name !== name)
	})
	console.log(products)
	
}

module.exports = {list:list, remove:remove};

