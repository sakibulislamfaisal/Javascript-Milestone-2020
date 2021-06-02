//This is data structure in ES6 version
const faisal = new Map();

//Add new value in this map
faisal.set("fullName", "faisal rahman");
faisal.set("age", 13);

//Access data in this map
const names = faisal.get("fullName");
console.log(names);
const ages = faisal.get("age");
console.log(ages);

//check specific value in this map or not
const checkName = faisal.has("fullName");
console.log(checkName);

//Delete value in this map
const deleteName = faisal.delete("fullName");
console.log(deleteName);
//after delete check name
const checkNameExist = faisal.has("fullName");
console.log(checkNameExist);

//clear full map and
console.log(faisal);
faisal.clear();
console.log(faisal);

//add several types of value in this map
faisal.set("name", "faisal rahman");
faisal.set("age", 13);
faisal.set("job", "student");
faisal.set("salary", 13000);
console.log(faisal);

//get size in this map
const mapSize = faisal.size;
console.log(mapSize);

//for loop in this map
faisal.forEach((value, index) =>
  console.log(`key is : ${index} and value is : ${value}`)
);
