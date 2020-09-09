// It provides an ability to call the same method on different JavaScript objects

class Person {
  constructor(name) {
    this.name = name;
  }
  displayAge() {
    console.log("method is called from Person Class");
  }
}

class Teacher {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  displayAge() {
    console.log("method is called form Teacher Class");
  }
}

const obj = [new Person("faisal"), new Teacher("faisal", 20)];
console.log(obj.displayAge);
obj.forEach(function (msg) {
  msg.displayAge();
});
