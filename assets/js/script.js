// Assignment code here
let characters = "";
let specialcharacters = "!@#$%^&*()";
let nbrcharacter = "0123456789";
let lowcharacter = "abcdefghijklmnopqrstuvwxyz";
let upcharacter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var results = "";
  //ask how many characters
  var length = prompt("How many characters should your password be?");
  console.log(length);
  // if less then 8 give alert "Password length must be at least 8 characters" and starts password generator again
  if (length < 8 || length > 128) {
    alert("Password must be between 8 and 128 characters!");
    return generatePassword();
  }
  // if length is good, then a true false prompt "Click OK to confirm including special characters/numeric characters/lowercase characters/uppercase characters."
  else {
    var special = confirm("Click OK to confirm including special characters.");
    console.log(special);
    var numeric = confirm("Click OK to confirm including numeric characters.");
    console.log(numeric);
    var lowercase = confirm(
      "Click ok to confirm including lowercase characters."
    );
    console.log(lowercase);
    var uppercase = confirm(
      "Click OK to confirm including uppercase characters."
    );
    console.log(uppercase);
    if (special) {
      characters += specialcharacters;
    }
    if (numeric) {
      characters += nbrcharacter;
    }
    if (lowcharacter) {
      characters += lowcharacter;
    }
    if (upcharacter) {
      characters += upcharacter;
    }
    // if false to all questions, alert "Must select at least one character type"
    if (
      special === false &&
      numeric === false &&
      lowercase === false &&
      uppercase === false
    ) {
      alert("Must select at least on character type!");
      return generatePassword();
    }
  }
  console.log(characters);

  for (i = 0; i < length; i++) {
    var char = Math.floor(Math.random() * characters.length + 1);
    results += characters.charAt(char);
  }

  console.log(results);
  return results;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
