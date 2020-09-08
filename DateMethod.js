//it will return a local time  zone in your computer
const date = new Date();

//1. getFullYear
const getFullYear = date.getFullYear();
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
const year = date.setFullYear(2021);
const month = date.setMonth(11);
const dateSet = date.setDate(13);
console.log("Year : ", year, "Month : ", month, "Date : ", dateSet);
