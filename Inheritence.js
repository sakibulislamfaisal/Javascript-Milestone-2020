//Inheritence: creating a new class using the existing class
//suppose two similar type class and their characteristics are mostly same or one class have many characteristics and other class are less characteristics....that time we Inheritence.

//static method access => class.method()

class Person {
  //parent class
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getValue() {
    console.log("Call the parent class method");
    console.log(`${this.name} was born in ${2013 - this.age}`);
  }
  static getStaticMethod() {
    console.log("call the static method");
  }
}
class Teacher extends Person {
  // child class
  constructor(name, age, salary) {
    super(name, age); // call parent class property
    // Person.call(this, name, age, salary); //this is also works instead of super
    this.salary = salary;
  }
}
const Object = new Teacher("faisal", 20, 20000);
console.log(Object);
console.log(Object.getValue()); // call the class method
console.log(Person.getStaticMethod()); // call the static method using class.method()
//using object we can not access static method
