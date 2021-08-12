
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
    return (Number(side1) + Number(side2) + Number(base));
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
function clearTriangle(){
    const side1 = document.getElementById("triangleSide1")
    const side2 = document.getElementById("triangleSide2")
    const base = document.getElementById("triangleBase")
    const height = document.getElementById("triangleHeight")
    side1.value = null
    side2.value = null
    base.value = null
    height.value = null
}

function calculateTriangleArea(){
    const side1 = document.getElementById("triangleSide1")
    const valueSide1 = side1.value;
    const side2 = document.getElementById("triangleSide2")
    const valueSide2 = side2.value;
    const base = document.getElementById("triangleBase")
    const valueBase = base.value;
    const height = document.getElementById("triangleHeight")
    const valueHeight = height.value;
    const area = triangleArea(valueBase,valueHeight);
    alert("Triangle Area is: " + area + "cm.");
}

function calculateTrianglePerimeter(){
    const side1 = document.getElementById("triangleSide1");
    const valueSide1 = side1.value;
    const side2 = document.getElementById("triangleSide2");
    const valueSide2 = side2.value;
    const base = document.getElementById("triangleBase");
    const valueBase = base.value;
    const height = document.getElementById("triangleHeight");
    const valueHeight = height.value;
    const perimeter = trianglePerimeter(valueSide1,valueSide2,valueBase);
    alert("Triangle Perimeter is: " + perimeter + "cm.");
}

function calculateCircleDiameter(){
    const radius = document.getElementById("circleInput")
    const valueRadius = radius.value;
    const diameter = circleDiameter(valueRadius);
    alert("Circle diameter is: " + diameter + "cm.")
}

function calculateCirclePerimeter(){
    const radius = document.getElementById("circleInput")
    const valueRadius = radius.value;
    const perimeter = circlePerimeter(valueRadius)
    alert("Circle perimeter is: " + perimeter + "cm.")
}

function calculateCircleArea(){
    const radius = document.getElementById("circleInput")
    const valueRadius = radius.value;
    const area = circleArea(valueRadius);
    alert("Circle area is: " + area + "cm.")
}