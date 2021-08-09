
//Code for the square
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

//code for triangle
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

// const triangleHeight = 5.5;

function trianglePerimeter(side1,side2,base) {
    return side1 + side2 + base;
}

function triangleArea(base,height){
    return (base * height) / 2;
}

console.groupEnd();

// Code for circle
console.group("Circles")

// Radius
// const circleRadius = 4;

// Diameter
function circleDiameter(radius){
    return radius * 2
}

// PI

const PI = Math.PI;

//Perimeter
function circlePerimeter(radius){
    const diameter = circleDiameter(radius)
    return diameter * PI;
}

// Radius
function circleArea (radius) {
    return (radius * radius) * PI
}

console.groupEnd()





