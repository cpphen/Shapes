var Triangle = require('./Triangle.js');
var Square = require('./Square.js');
var Pentagon = require('./Pentagon.js');
var Shape = require('./Shape.js');

var triangle = new Triangle(8, 5, 20);
var square = new Square(7);
var pentagon = new Pentagon(7, 8, 10, 9, 7);

var shape = new Shape();

console.log(triangle.s1, triangle.s2, triangle.s3);
console.log(triangle.get_type());

console.log(square.s1, square.s2, square.s3, square.s4);
console.log(square.get_type());

console.log(pentagon.s1, pentagon.s2, pentagon.s3, pentagon.s4, pentagon.s5);
console.log(pentagon.get_type());

console.log(shape);

console.log('-'.repeat(24));

// Ensuring instanceof works as expected.
console.log(triangle instanceof Triangle);
console.log(square instanceof Square);
console.log(pentagon instanceof Pentagon);
console.log(shape instanceof Shape);