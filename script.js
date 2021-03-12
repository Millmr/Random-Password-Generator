// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create the function the generat a random password.
function generatePassword() {

// Make arrays for all the character options.
  var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var symbolArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", ",", "."];
  
  var combinedArray = [];
  var userArray = [];
  //Create length prompt with if statements when user chooses numbers outside of the allowed amount.
  var length = prompt("How many characters would you like in your password? Must be between 8 and 128.");
  if (length < 8) {
    alert("Must be 8 or more characters please :)");
    return(generatePassword());
  }
  
  if (length > 128) {
    alert("Must be 128 or less characters please :)")
    return(generatePassword());
  }
  //Create confirms for numbers, lowercase letters, upper case letter and symbols.
  var numbers = confirm("Would you like numbers in your password?");
  var lowerCase = confirm("Would you like lowercase letters in your password?");
  var upperCase = confirm("Would you like uppercase letters in your password?");
  var symbols = confirm("would you like special characers in your password?");
  
  //Create if statements that will combine the selected arrays. 
    if (lowerCase === true) {
      combinedArray = combinedArray.concat(lowerArray);
    } 
    if (upperCase === true) {
      combinedArray = combinedArray.concat(upperArray);
    }
    if (numbers === true) {
      combinedArray = combinedArray.concat(numberArray);
    } 
    if (symbols === true) {
      combinedArray = combinedArray.concat(symbolArray);
    }

  //Create for loop that will that will generate the length given by user.
  //Use push and join methods to add elements from the combined array to a new array.
    for (var i= 0; i < length; i++) {
      userArray.push (combinedArray[Math.floor(Math.random() *  combinedArray.length)]);
    }
    return userArray.join('') ;
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


