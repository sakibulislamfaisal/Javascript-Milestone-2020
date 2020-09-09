//Destructuring means find separate data from different object or array
//Before using destructuring
const person = {
  firstName: "faisal",
  lastName: "rahman",
  age: 20,
};
//if we access the value of person object then we have to do
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);

// After using Destructuring we have access the value only one smart way
const { firstName, lastName, age } = person; // that access person object property
console.log(`${firstName} ${lastName} ${age}`);
