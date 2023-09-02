
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var Numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharacters = ["!","@","#","$","%","^","&", "*", "?",".","~", "-", "_", "/", "|", "=", "+"];

function getPasswordOptions() {

   // Variable to store boolean regarding the inclusion of special characters
   var hasSpecialCharacters = confirm(
    'Click OK to confirm including special characters.'
  );

  var hasupperCase = confirm(
    'Click OK to confirm including Uppercase letters.'
  );

  var haslowerCase = confirm(
    'Click OK to confirm including Lowercase letters.'
  );

  var hasNumbers = confirm(
    'Click OK to confirm including Numbers.'
  );

  // Variable to store length of password from user input
  var length = parseInt(
    prompt('How many characters would you like your password to contain?')
  );

  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (Number.isNaN(length)) {
    alert('Password length must be provided as a number');
    return null;
  } else if (length < 8 || length > 128) {
    alert("Password must be between 8 to 128 characters.");
    return; 
  }

   // Object to store user input
   var passwordOptions = {
    length: 
    length, 
    hasSpecialCharacters, 
    hasupperCase, 
    haslowerCase, 
    hasNumbers
   }

   return passwordOptions;

  }

// Function for getting a random element from an array(all instances of arr will be replaced by an ACTUAL VALUE when we do our callback.)
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  return randElement;
}



// Function to generate password with user input
function generatePassword() {

  var options = getPasswordOptions();
  // Variable to store password as it's being concatenated
  var result = [];

  // Array to store types of characters to include in password
  var possibleCharacters = [];

  // Array to contain one of each type of chosen character to ensure each will be used
  var guaranteedCharacters = [];

  // Check if an options object exists, if not exit the function
  if (!options) return null;

   // Conditional statement that adds array of special characters into array of possible characters based on user input
  // Push new random special character to guaranteedCharacters
  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  if (options.hasupperCase) {
    possibleCharacters = possibleCharacters.concat(upperCase);
    guaranteedCharacters.push(getRandom(upperCase));
  }

  if (options.haslowerCase) {
    possibleCharacters = possibleCharacters.concat(lowerCase);
    guaranteedCharacters.push(getRandom(lowerCase));
  }

  if (options.hasNumbers) {
    possibleCharacters = possibleCharacters.concat(Numbers);
    guaranteedCharacters.push(getRandom(Numbers));
  }

  for (var i=0; i < options.length; i++) {
    var possibleCharacters = getRandom(possibleCharacters);
    result.push(possibleCharacters);
  }

  for(var i=0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters [i]
  }
    // Transform the result into a string and pass into writePassword
    return result.join('');
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//dev.to (https://dev.to/code_mystery/random-password-generator-using-javascript-6a)
function copyPassword() {
  var copyText = document.getElementById("password");
  copyText.select();
  document.execCommand("copy");
  alert("Password copied to your clipboard!");
}
