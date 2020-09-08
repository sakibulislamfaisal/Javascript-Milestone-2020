// Call method directly call another object
// it take first object(this) and after argument separated by comma
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
normalPerson.chargeBill.call(friendlyPerson, 2000, 250, 250);
normalPerson.chargeBill.call(friendlyPerson, 2000, 250, 250);

console.log(friendlyPerson.salary);
