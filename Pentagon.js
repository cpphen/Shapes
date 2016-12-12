var Shape = require('./Shape.js');

var Pentagon = function(s1, s2, s3, s4, s5){
	this.s1 = s1;
	this.s2 = s2;
	this.s3 = s3;
	this.s4 = s4;
	this.s5 = s5;
}

Pentagon.prototype = new Shape();
// console.log("Pentagon Proto", Pentagon.prototype)

Pentagon.prototype.constructor = Pentagon;
module.exports = Pentagon;