//it will return a local time  zone in your computer
//UTC => Universal Time Coordinated
//GMT => Greenwich Mean Time
const date = new Date();
console.dir(date);
console.log(date);
console.log(date.toDateString());
console.log(date.toUTCString());

//set Local time zone
console.log(date.toLocaleDateString());
console.log(date.toLocaleDateString("bn-BD"));

//pass arguments
console.log(
  date.toLocaleDateString("bn-BD", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  })
);
//local time String
console.log(date.toLocaleTimeString("bn-BD"));
//1. getFullYear
//const getFullYear = date.getFullYear();
const getFullYear = date.getUTCFullYear();

console.log("Current Year is =", getFullYear);

//2. getMonth
const getMonth = date.getMonth();
console.log("Current Month is =", getMonth);

//3. getDay it will count start monday
const day = date.getDay();
console.log("Current Day is =", day);

//4. get today date from javascript
const todayDate = date.getDate();
console.log("Current Date is =", todayDate);

//5. similarly we find hours , minute , seconds
const hours = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();
console.log("Hours : ", hours, "Minute : ", minute, "Second : ", second);

//6. Also perform a Set method to set the year or timezone
// const year = date.setFullYear(2021);
// const month = date.setMonth(11);
// const dateSet = date.setDate(13);
const year = date.setUTCFullYear(2021);
const month = date.setUTCMonth(11);
const dateSet = date.setUTCDate(13);
console.log("Year : ", year, "Month : ", month, "Date : ", dateSet);
