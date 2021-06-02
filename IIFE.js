//if we used (IIFE - immediately invoked function expression ) then we don't need call function'
// data can be shared one function to another function
//using IIFE we can create private variables and private function
//BASIC FUNCTION
function DemoFunction() {
  console.log("Hello Bangladesh");
}
DemoFunction();

//Or Another Declare function   declaration
var anotherFunction = function () {
  console.log("Hello Another Function");
};
anotherFunction();

//IIFE USED
(function Add() {
  console.log("Add function called");
})();

(function Add(a, b) {
  console.log("Addition : ", a + b);
})(3, 5);

//data shared using IIFE  functions
var Subtraction = (function () {
  var person = {
    name: "faisal rahman",
    age: 18,
  };
  return person;
})();

var AccessFunction = (function () {
  console.log("Hello", Subtraction.name);
})();
