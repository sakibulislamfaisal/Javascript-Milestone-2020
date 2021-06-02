//all function are called first class function.
//because it pass an argument into another function, return one function to another function and function are also used to store variable.

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

//return one function to another function
function welcomeMsg(name) {
  console.log("Welcome to ", name);
  return function Choice(menu) {
    console.log("Do you like", menu, "Mr.", name);
  };
}
welcomeMsg("faisal")("Tea");

//store function into variable for
var today = function Today(today) {
  console.log("Today is ", today);
};
var newDay = today;
newDay("saturday");
