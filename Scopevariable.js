//In javascript most of the variable are used such as (var , const , let)
//Local Variable : The variable is only used the function where it is declared.
//Global Variable : The variable is used anywhere that you want.

//1. var variable (you want to work then declare first)
var num = 10;
console.log("Number : ", num);
// if you print first then declare a variable then it will return undefined
// console.log("Number : ", num);
// var num = 10;

//2. Constant variable that means you will not change value in anymore
const number = 101;
console.log("Constant : ", number);

//3. let variable is a local variable
function add(num1, num2) {
  let num3 = 10;
  var sum = num1 + num2 + num3;
  return sum;
}
const sumValue = add(2, 5);
console.log("Total value is : ", sumValue);

//if I access the let variable outside of the function it will return an error because it is not defined
// var num4 = 3;
// const num5 = num3 + num4;
// console.log("Number 5 value is : ", num5);

//Lexical Scope
function parentFunction() {
  var a = 4;
  function childFunction() {
    var b = 5;
    console.log("Child Function access Parent value: ", a + b);
  }
  childFunction();
}
parentFunction();
