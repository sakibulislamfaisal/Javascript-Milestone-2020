//using new keyword we can create class to object
//class to object why => every object property behaviour are similar

//create a class
class Person {
  constructor(firstName, lastName, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
  }
}
const Student = new Person("faisal", "rahman", 20000);
const Teacher = new Person("Rana", "Mahmud", 40000);
console.log(Student);
console.log(Teacher);
