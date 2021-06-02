//for loop execution
for (var i = 0; i < 10; i++) {
  console.log(i);
}

//do-while loop
var num = 1;
do {
  console.log(num + " ");
  num += 1;
} while (num < 10);

//while loop execution
var num = 10;
while (num > 0) {
  console.log(num + " ");
  num -= 1;
}

//break statement
for (var i = 0; i < 10; i++) {
  if (i == 9) {
    break;
  }
  console.log(i + " ");
}

//continue statement with
for (var i = 0; i < 10; i++) {
  if (i == 6) {
    console.log(i + " is skipped");
    continue;
  }
  console.log(i + " ");
}
