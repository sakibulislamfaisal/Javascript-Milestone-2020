//Apply method and call method are like similar
// Apply method takes first parameter object(this) and after it take all parameter into an array
const normalPerson = {
  firstName: "faisal",
  lastName: "rahman",
  salary: 20000,
  getFullName: function () {
    console.log(this.firstName, this.lastName);
  },
  chargeBill: function (amount, tips, tax) {
    this.salary = this.salary - amount - tips - tax;
    return this.salary;
  },
};

const friendlyPerson = {
  firstName: "karim",
  lastName: "rahim",
  salary: 10000,
};
console.log(friendlyPerson);
normalPerson.chargeBill.apply(friendlyPerson, [2000, 500, 500]);
//normalPerson.chargeBill.apply(friendlyPerson, [2000, 500, 500]);
console.log(friendlyPerson.salary);
console.log(normalPerson.salary);
