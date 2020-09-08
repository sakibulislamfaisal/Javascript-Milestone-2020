// Pass unlimited parameter in bind and call method
// Now create two or more object and apply bind
const normalPerson = {
  firstName: "faisal",
  lastName: "rahman",
  salary: 20000,
  getFullName: function () {
    console.log(this.firstName, this.lastName);
  },
  chargeBill: function (amount) {
    this.salary = this.salary - amount;
    return this.salary;
  },
};
//console.log(normalPerson.firstName);
// normalPerson.chargeBill(2000);
// normalPerson.chargeBill(5000);
// console.log(normalPerson.salary);

//Bind are used when a method inside a object and this method will apply into another object .
// it will return function so that it will store a new variable

// create another object
const friendlyPerson = {
  firstName: "karim",
  lastName: "rahim",
  salary: 10000,
};

const frienlyPersonChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
frienlyPersonChargeBill(2000);
frienlyPersonChargeBill(4000);
console.log(friendlyPerson.salary);
