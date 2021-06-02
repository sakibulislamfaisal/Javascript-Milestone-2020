//map are apply in array it will return specific result
//map(item,index,fullArray)
const arr = [2, 3, 5, 6, 7, 1];
const arrayMap = arr.map((element) => {
  return element * element;
});
console.log("After Mapping Array : ", arrayMap);

//2. Filter are also apply on array but it is printed by condition .(true or false)
const arrayFilter = arr.filter((element) => element > 3);
console.log("After Filtering Array : ", arrayFilter);

//3. Find method are also used in array . it is based on condition and printed first element after condition is true.
const arrayFind = arr.find((element) => element > 5);
console.log("After Finding Array : ", arrayFind);
