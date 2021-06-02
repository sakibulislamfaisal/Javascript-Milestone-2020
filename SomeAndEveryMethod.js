//some method is used to find specific value of an array
// when condition is true then it will not check other code
const arr = [1, 2, 2, 3, 3, 4, "faisal", "rahman"];
arr.some((element, index, array) => {
  if (element === "faisal") console.log("Element : ", element);
  // return element === 34;
  // console.log(element, index, array);
});

//when condition is false then it will return false and stop
const array = [1, 1, 1, 1, 1, 1, 2, 3, 4, 32, 22, 3, 3, 2, 21];
array.every((element, index, array) => {
  console.info(`Element is every : ${element}`);
  return element === 1;
});
