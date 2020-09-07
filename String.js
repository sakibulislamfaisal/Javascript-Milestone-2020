//A simple discuss of the javascript String

const name = "faisal rahman";

//1.find length
const length = name.length;
console.log("Length of String =", length);

// 2. find position
const position = name.indexOf("r");
console.log("Position is = ", position);

//3. convert string to uppercase
const uppercase = name.toUpperCase();
console.log("Uppercase String is = ", uppercase);

//4. replace a string with a new  string
const replace = name.replace("faisal rahman", "sakibul islam faisal");
console.log("The New Replace String is ", replace);

//5. string slice
const slice = name.slice(5);
console.log("Slice value is ", slice);

//6.trim the string
const trim = name.trim();
console.log("trim value is ", trim.length);
