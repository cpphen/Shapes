function Shape()
{
	this.type = '';

	// this.get_type = function()
	// {
	// 	console.log(this.constructor)
	// }
}
Shape.prototype.get_type = function(){
	console.log(this.constructor)
}
function Triangle(s1, s2, s3)
{
	this.side1 = s1;
	this.side2 = s2;
	this.side3 = s3;
}

function Square(s1, s2, s3, s4)
{
	this.side1 = s1;
	this.side2 = s2;
	this.side3 = s3;
	this.side4 = s4;
}



console.log(Triangle.prototype);
// (Triangle.prototype = new Shape()).constructor = Triangle;
Triangle.prototype = new Shape();
Triangle.prototype.constructor = Triangle;

// Square.prototype = new Shape();

var triangle = new Triangle(10, 8, 15);
var sqaure = new Square(10, 8, 15);

Square.prototype = new Triangle();
Square.prototype.b = 2;
Square.prototype.c = 3;
square.b = 1;
console.log(Triangle.prototype); //Shows the Shape() function on console.
console.log(triangle.side1, triangle.side2, triangle.side3) //Shows the Triangle constructor works.
// var square = new Square(20, 20, 20, 20);
triangle.get_type(); // Get a not a function error.