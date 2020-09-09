//Encapsulation => hiding sensitive information or data
//Encapsulation is the bundling of data and the methods that act on that data such that access to that data is restricted from outside the bundle
class Student {
  constructor() {
    var name;
    var age;
  }
  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }
  getAge() {
    return this.age;
  }
  setAge(age) {
    this.age = age;
  }
}
const Std = new Student("faisal", 20);
console.log(Std);
Std.setName("faisal");
Std.setAge(20);
const names = Std.getName();
const ages = Std.getAge();
console.log("Name : ", names, " and ", "Age : ", ages);
