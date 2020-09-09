// Back tik sign
//before ES6 using string
var name = "faisal rahman";
var age = 16;
var address = "Dhaka";
console.log("Name : " + name + " Age : " + age + " Address : " + address);

//Using Template Literal In ES6
const userName = "sakibul islam faisal";
const userAge = 20;
const userAddress = "Jamalpur";
console.log(`Name : ${userName} Age : ${userAge} Address : ${userAddress}`);

//ES6 special method
const newUserStart = userName.startsWith("sa");
console.log(`${newUserStart}`);
const newUserEnd = userName.endsWith("ra");
console.log(`${newUserEnd}`);
const newUserInclude = userName.includes("rahman");
console.log(`${newUserInclude}`);
