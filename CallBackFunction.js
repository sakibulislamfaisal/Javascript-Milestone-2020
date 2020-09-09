// const getFirst = () => {
//   setTimeout(function () {
//     console.log("call the first function");
//   }, 3000);
// };
// const getSecond = () => {
//   console.log("call the second function");
// };
// getFirst();
// getSecond();

//here javascript is asynchoronous so first print second function and wait 3 second then print first

const getFirst = (callback) => {
  setTimeout(function () {
    console.log("call the first function");
    callback();
  }, 3000);
};
const getSecond = () => {
  console.log("call the second function");
};
getFirst(getSecond);

// this time it is printed first function and then second function .
