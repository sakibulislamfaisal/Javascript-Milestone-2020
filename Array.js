const arr = [1, 3, 5, 7, 4, 10];
const array = ["faisal", "sakib", "sumon", "lutfor"];

//1.length of an array
const length = arr.length;
console.log("The Length value is  = ", length);

//2. Push a new value of an array
const push = arr.push(6);
console.log("The Push Value is = ", arr);

//3. Delete last element in the array
const element = arr.pop();
console.log("Remove last element = ", element, "The new value is = ", arr);

//4. Delete first element in the array
const elements = arr.shift(12);
console.log("Remove First element= ", elements, "The new value is = ", arr);

//5.Sort an array Ascending  order
console.log("Array is = ", array);
const AscendingOrder = array.sort();
console.log("Ascending Order Array is = ", AscendingOrder);

//6.Sort an array  Descending order
console.log("Array is = ", array);
const DescendingOrder = array.reverse();
console.log("Descending Order Array is = ", DescendingOrder);

//7. Add an element in the first of an array
console.log("Array is = ", array);
const addFirst = arr.unshift(9);
console.log("Add element in the first  ", addFirst, "The new value is = ", arr);

//8. Remove most of the elements of an array
console.log("Array is = ", arr);
const spliceMethod = arr.splice(3, 2);
console.log("Remove Elements = ", spliceMethod, "The new value is = ", arr);

//9. array join
const arr1 = [1, 2, 4, 5, 6];
const joinArray = arr.concat(arr1);
console.log("The Joining Array is = ", joinArray);
