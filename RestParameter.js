//Rest Parameter => arguments
// arguments access all the value if you do not pass in the function
function Add(a, b, c, d) {
  const sum = a + b + c + d;
  console.log(sum, arguments);
}
add(2, 3);
Add(2, 3, 4, 6, 6, 8, 9);

// //using arguments in ES5
function add() {
  for (i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}
add("faisal", "rahman");
add(6, 5);

// In ES6 it is not working
// const add = () => {
//   for (i = 0; i < arguments.length; i++) {
//     console.log(arguments[i]);
//   }
// };
// add("faisal", "rahman");

// why it is error => it is called an array like object that means similar type of array but it is object.
