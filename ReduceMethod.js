// it is used to count array values in total
// we are find array total value using loop
const arr1 = [2, 4, 6, 3];
var sum = 0;
for (i = 0; i < arr1.length; i++) {
  sum = sum + arr1[i];
}
console.log("Array Sum is : ", sum);

//it is easily counted by array reduce method
// Here 10 is the sum value that is called state variable
const arr = [2, 4, 6, 3];
const total = arr.reduce((sum, element) => (sum += element), 10);
console.log(total);
