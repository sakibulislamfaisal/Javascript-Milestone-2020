//try and catch block
try {
  //console.aqua("This is an error");
} catch (e) {
  console.log("Anything is possible in life");
  console.log(e);
}

//throw exception

const age = 16;
try {
  if (age < 18) {
    throw "you are so young";
  } else {
    console.log("You are Adult");
  }
} catch (e) {
  console.log(e);
}

//finally statement that will be used to run code every time if error is occur or not
try {
  console.log("This is an error");
} catch (e) {
  console.log("Anything is possible in life");
  console.log(e);
} finally {
  console.log("I will run always");
}
