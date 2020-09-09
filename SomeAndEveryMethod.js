//some method is used to find specific value of an array
// when condition is true then it will not check other code
const arr = [1, 2, 3, 3, 4, "faisal", "rahman"];
arr.some((element, index, array) => {
  if (element === "faisal") console.log("Element : ", element);
  //return element === 3;
  // console.log(element, index, array);
});

//when condition is false then it will return false and stop
arr.every((element, index, array) => {
  console.log(`Element : ${element}`);
  return element === 2;
});
