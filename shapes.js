
// code for the square
console.group("squares")
// const squareSide = 5;
// console.log("the square sides measure: " + squareSide + "cm" + " each")

function squarePerimeter(side) {
    return side * 4;
}

function squareArea(side) {
    return side * side;
}
console.groupEnd()

// code for triangle
// const triangleSide1 = 6;
// const triangleSide2 = 6;
// const triangleBase = 4;

console.group("Triangles")
// console.log(
//     "the triangle sides measure: "
//      + triangleSide1
//      + "cm, "
//      + triangleSide2
//      + "cm, "
//      + triangleBase
//      + "cm."
//     )

function trianglePerimeter(side1,side2,base) {
    return side1 + side2 + base;
}

function triangleArea(base,height){
    return (base * height) / 2;
}

console.groupEnd();

// Code for circle
console.group("Circles")

// Diameter
function circleDiameter(radius){
    return radius * 2
}

// PI

const PI = Math.PI;

// Perimeter
function circlePerimeter(radius){
    const diameter = circleDiameter(radius)
    return diameter * PI;
}

// Radius
function circleArea (radius) {
    return (radius * radius) * PI
}

console.groupEnd()

// Now we interact with the HTML

function calculateSquarePerimeter(){
    const input = document.getElementById("squareInput");
    const value = input.value;
    const perimeter = squarePerimeter(value);
    alert("Square perimeter is: " + perimeter + "cm.");
}

function calculateSquareArea(){
    const input = document.getElementById("squareInput");
    const value = input.value;
    const area = squareArea(value);
    alert("Square Area is: " + area + "cm.");
}