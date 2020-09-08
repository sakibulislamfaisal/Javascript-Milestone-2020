//Mathematical operation in javascript
//1.Round operation in math
const round = Math.round(10.343);
console.log("Round value : ", round);

//2.Floor operation in javascript(count down value)
const floor = Math.floor(8.54);
console.log("Floor value : ", floor);

//3.ceil operation in javascript (count upper value)
const ceil = Math.ceil(8.54);
console.log("Ceil value : ", ceil);

//4. Find square root value in javascript
const squareRoot = Math.sqrt(64);
console.log("Square Root value : ", squareRoot);

//5. Find power value in  javascript
const powerValue = Math.pow(2, 5);
console.log("Power value : ", powerValue);

//6.Find Random value between 0 and 1  in javascript
const randomValue = Math.random();
console.log("Random value : ", randomValue);

//7. Find absolute or positive value in javascript
const absoluteValue = Math.abs(-32);
console.log("Absolute value : ", absoluteValue);

//8. Find maximum and minimum  value in javascript
const arr = [1, 3, 5, 6, 8, 9, 55, 44, 332, 2, 32, 22];
const maxValue = Math.max(...arr);
const minValue = Math.min(...arr);
console.log("Maximum value : ", maxValue, "Minimum value : ", minValue);
