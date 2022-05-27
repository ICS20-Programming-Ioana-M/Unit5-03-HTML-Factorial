'use strict';

function factorial() {
  
  // Variables for user's number, message at the end, and counter
  let factorialNum = parseInt(document.getElementById('user-integer').value);
  let message = "";
  let counter = factorialNum

  // check if valid number
  if (factorialNum >= 0) {
    // check if the user inputted a 1 or 0
    if (factorialNum != 0 && factorialNum != 1) {

      // do while loop to calculate the factorial
      do {
        counter--;
        factorialNum = factorialNum * counter;
      } while (counter > 1);
      message = "The factorial of your number is " + factorialNum;
      
      // user inputed 1 or 0
    } else {
      message = "The factorial of " + factorialNum + " 1";
    }
    // user didn't enter a valid number
  } else {
    message = "Please pick a valid number.";
  }
  
  // Displays message for factorial
  document.getElementById("answer").innerHTML = message;
}
