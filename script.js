// Assignment Code
var generateBtn = document.querySelector("#generate");

//<==========Vars and Arrays=======>
var uppercaseChoice;
var lowercaseChoice;
var numberChoice;
var specialChoice;
var allChoices = [];
var upperArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowerArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.innerHTML = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//<==================Password Generator======================>
function generatePassword() {
  var passwordLength = prompt(
    "How long should the password be? (8-128 characters)"
  ); // ask for length
  if (!passwordLength) {
    alert("You need a length"); // makes you chose a length
  } else if (passwordLength < 8 || passwordLength > 128) {
    // makes sure you got the length between 8 and 128
    alert("Password needs to be between 8 and 128");
    return;
  } else {
    uppercaseChoice = confirm("Would you Upper Case Characters?"); // goes through and each parameter to to store the variable
    lowercaseChoice = confirm("Would you Lower Case Characters?");
    numberChoice = confirm("Would you numbers?");
    specialChoice = confirm("Would you Special Characters?");
  }

  if (!uppercaseChoice && !lowercaseChoice && !numberChoice && !specialChoice) {
    //at least one choice is needed
    alert("You need to choose a at least one");
    return;
  } else if (
    uppercaseChoice &&
    lowercaseChoice &&
    numberChoice &&
    specialChoice
  ) {
    // if they chose all
    allChoices = upperArray.concat(numberArray, lowerArray, specialArray);
  } else if (specialChoice && lowercaseChoice && numberChoice) {
    //number, lower, special
    allChoices = specialArray.concat(numberArray, lowerArray);
  } else if (uppercaseChoice && lowercaseChoice && specialChoice) {
    // upper, lower, special
    allChoices = specialArray.concat(lowerArray, upperArray);
  } else if (uppercaseChoice && numberChoice && lowerChoice) {
    // upper, number, lower
    allChoices = lowerArray.concat(numberArray, upperArray);
  } else if (uppercaseChoice && numberChoice && specialChoice) {
    // upper, number, special
    allChoices = specialArray.concat(lowerArray, numberArray);
  } else if (uppercaseChoice && lowercaseChoice) {
    // upper, lower
    allChoices = upperArray.concat(lowerArray);
  } else if (uppercaseChoice && specialChoice) {
    // upper, special
    allChoices = upperArray.concat(specialArray);
  } else if (uppercaseChoice && numberChoice) {
    // upper, number
    allChoices = upperArray.concat(numberArray);
  } else if (numberChoice && specialChoice) {
    // number, special
    allChoices = specialArray.concat(numberArray);
  } else if (numberChoice && lowercaseChoice) {
    // number, lower
    allChoices = numberArray.concat(lowerArray);
  } else if (lowercaseChoice && specialChoice) {
    // special, lower
    allChoices = specialArray.concat(lowerArray);
  } else if (uppercaseChoice) {
    // upper
    allChoices = upperArray;
  } else if (lowercaseChoice) {
    // lower
    allChoices = lowerArray;
  } else if (specialChoice) {
    // special
    allChoices = specialArray;
  } else if (numberChoice) {
    // number
    allChoices = numberArray;
  }

  for (let i = 0; i < allChoices.length; i++) {
    const element = allChoices[i];
    var newPassword = allChoices[Math.floor(Math.random() * passwordLength)];
    console.log(newPassword);
  }
}
// for (let i = 0; i < passwordLength; i++) {
//   var password = allChoices[Math.floor( Math.random() * passwordLength)] ;
//   console.log(password);
//   return password;

// }

//GIVEN I need a new, secure password
// WHEN I click the button to generate a password
//                      TODO: write generatePassword func
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
//                      TODO: ask the length of password-> use prompt-> make sure info is correct -> more than 8 less than 128 character totals  \\
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//                      TODO: ask 4 different confirms to ask what a user wants
//                      TODO: write 4 arrays lower, uppercase, number, special character
//                      TODO: check if prompts are are true or false-. use a var form above->
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
//                      TODO: check if we have one of these types
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
//                      TODO:take holding array and randomize values -> add a sec array
//                      TODO:take randomized characters and select the chosen for length -> add to "return array"-> for loop and it will be the password length
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
//                      TODO: take return array and convert to string -> return string
