// In this part I will discuss three types of loop and (two keyword - break & continue)

//1. For loop
for (var i = 0; i < 10; i++) {
  console.log("Looping value is : ", i);
}
// Now apply to for loop of an array
const arr = [1, 33, 4, 5, 6, 7];
for (var i = 0; i < arr.length; i++) {
  const element = arr[i];
  console.log("Array Elements : ", element);
}

//2. While Loop
var num = 0;
while (num < 10) {
  console.log("Decrement Number : ", num);
  num++;
}

//3. do-while Loop (first print then condition)
var i = 0;
do {
  console.log("Value is : ", i);
  i++;
} while (i < 12);

//4. Break keyword (when condition true then it will break , other condition are not check)
for (var i = 0; i < 10; i++) {
  if (i == 3) break; // when condition true then it will stop
  console.log("value of i is : ", i);
}

//5. continue keyword (when it true then it will skip this and other will continue check)
for (var i = 0; i < 10; i++) {
  if (i == 3) continue; // Skip the value of 3 and other will print
  console.log("Continue value  is : ", i);
}
