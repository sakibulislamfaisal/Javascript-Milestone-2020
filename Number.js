const number = 10.493;

//1.toFixed method
const newValue = number.toFixed();
console.log("The Fixed value is ", newValue);

//2.toPrecision value
const precision = number.toPrecision(4);
console.log("The Precision value is ", precision);

//3.toExponential value
const exponential = number.toExponential(1);
console.log("The Exponential value is ", exponential);

//4. convert into parseFloat
const floatNumber = parseFloat(number);
console.log("The Float value is ", floatNumber);

//5. convert into parseInt
const intNumber = parseInt(number);
console.log("The Int value is = ", intNumber);

//6. valueOf property
const value = number.valueOf();
console.log("The New Value is ", value);
