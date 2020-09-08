// This a javascript keyword
// it mainly follow four rules:
// global , object , clear , new keyword rules
// use strict used to avoid bad practice.

//1. object rules
const person = {
  name: "faisal",
  age: 12,
  msg: function () {
    console.log("My Name is : ", this.name); // this means object
  },
};
person.msg();

//2. Global means window
function hello() {
  console.log("Global value is : ", this);
}
hello();

//3. clear rules
const student1 = {
  name: "faisal rahman",
  id: 1,
  address: "Dhaka",
  student2: {
    id: 2,
    name: "sakibul islam faisal",
    value: function () {
      console.log(this);
    },
  },
};

student1.student2.value(); // call the student2 object => value

// if we want to custom called the object student1
student1.student2.value.call(student1);

// called normal function it means global object
// except custom object all the object are global
// if a method inside a object and access the object value using this
const obj1 = {
  name: "faisal",
  age: 20,
  address: "Dhaka",
  obj2: {
    name: "sakib",
    getMessage: function () {
      console.log("Name is : ", this.name);
    },
  },
};
const obj3 = obj1.obj2.getMessage.bind(obj1); //store in variable otherwise it will not work
obj3();
