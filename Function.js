//1. Create a function  that name is Add
function Add() {
  console.log("You called the add function");
}
Add(); // Call the function

//2. Adding value using function
function Sum(a, b) {
  var c = a + b; // It will return a value after two value adding
  return c;
}
console.log("The Sum value is : ", Sum(10, 5));

//3.Now create a two function and pass the parameter into one function to another function that is called callback function.

function myName(name, callback) {
  var age = 20;
  callback(age);
  console.log("My Name is : ", name);
}

function age(myage) {
  console.log("Age is : ", myage);
}
myName("faisal", age);
