//Every Time a child function access parent function  all properties such variable , object and function. if i will return parent function then child function access all properties because it stay on memory after return it. That is  called closure.

//Closure
function closureDemo() {
  // parent function
  var num1 = 10;
  return function () {
    // child function called annonymous function
    var num2 = 20;
    console.log("Child Access the value of own and Parent : ", num1 + num2);
  };
}
closureDemo()(); // Two parenthesis add because two function exist first called parent then called child function
