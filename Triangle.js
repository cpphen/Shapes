var Shape = require('./Shape.js');

function Triangle(s1, s2, s3){
	this.s1 = s1;
	this.s2 = s2;
	this.s3 = s3;
}


Triangle.prototype = new Shape();
Triangle.prototype.constructor = Triangle;
module.exports = Triangle;