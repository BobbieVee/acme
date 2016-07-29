var _products = [
	{
    id: 1,
		name: "Cervelo Bicycle",
		description: "Aerodynamic Time Trial Bicycle"
	},
	{
    id: 3,
		name: "Altra Shoes",
		description: "Zero-drop running shoes"	
	},
	{
    id: 5,
		name: "Speedo Swim Goggles",
		description: "Same type that Michael Phelps wears"
	}
];

function list(){
  return _products;
}

function remove(id){
  var idx = this.list().indexOf(this.get(id));
  this.list().splice(idx, 1);
}

function get(id){
  return this.list().filter(function(product){
    return product.id === id;
  })[0];
}

function add(name){
  var max = this.list().reduce(function(max, product){
    if(product.id > max)
      max = product.id;
    return max;
  }, 0);
  this.list().push({ id: max, name: name });

}

module.exports = {
  get: get,
  list: list,
  remove: remove,
  add: add 
};

