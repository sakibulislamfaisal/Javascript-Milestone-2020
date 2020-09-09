//ES5 function
const getName = function (n1, n2) {
  return n1 * n2;
};
const result = getName(2, 3);
console.log(`${result}`);

//After ES6 the Arrow function syntax is
const userName = () => {
  console.log("Arrow function is called");
};
userName();
//In ES6 hoisting is not possible that means first call function then create a function
// In ES6 this keyword are lexical because it is global object in any where
