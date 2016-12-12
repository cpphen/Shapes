var Shape = require('./Shape.js');

var Square = function(s1){
	this.s1 = s1;
	this.s2 = s1;
	this.s3 = s1;
	this.s4 = s1;
}

Square.prototype = new Shape();
// console.log("Square Proto", Square.prototype)

Square.prototype.constructor = Square;
module.exports = Square;