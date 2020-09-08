//Javascript declare all the things up to top . that is called hoisting. first call the function then declare the function.(default behaviour).

Multiplication(); //Execution face

function Multiplication() {
  //creation face
  var num1 = 10;
  var num2 = 10;
  var total = num1 * num2;
  console.log("Multiplication value is : ", total);
}

//2. Hosing using variable
console.log("value of a is : ", a); // it is undefined because it is not declare before.
var a = 10;

// since it is stay on creation face so no error occur.
