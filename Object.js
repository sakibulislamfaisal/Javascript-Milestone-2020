// Object means that contain several kinds of characteristics

//1. Declare a person object
const person = {
  id: 1,
  name: "faisal",
  age: 20,
  address: "Dhaka",
  getZipCode: function () {
    console.log("Hello");
  },
};

// To access the all object property
console.log("Object Contains : ", person);

//If i want to access different property of an object
console.log("Person Id is : ", person.id);
console.log("Person Name is ", person.name);
console.log("Person Age is : ", person.age);

//other way to access same value
console.log("Person Address is : ", person["address"]);

//To add new item of an object
person.job = "Student";
console.log("After Add item New Object Contains : ", person);

//To access method of an function
console.log("Method Value : ", person.getZipCode());

//write array in object
const student = {
  name: ["faisal", "sakib", "sumon"],
  age: [20, 22, 23],
};
console.log("Name value is : ", student.name[2]);
console.log("Age value is : ", student.age[0]);
