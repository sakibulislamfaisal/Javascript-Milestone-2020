//Default Parameter

const sum = (num1, num2 = 10) => {
  const sum = num1 + num2;
  return sum;
};
const result = sum(12);
console.log(`Sum is : ${result}`);

// Or
const sum1 = (num1 = 10, num2 = 10) => {
  const sum = num1 + num2;
  return sum;
};
const result1 = sum1(null, 15);
console.log(`Sum is : ${result1}`);
