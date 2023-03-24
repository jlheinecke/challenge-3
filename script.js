
var min_length = 8
var max_length = 128
var pass

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function randChar(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

function generatePassword() {
do {

  var length = prompt("Password Length", "At least 8 but no more than 128 characters");
  if (length === null) {
    return;
  }
  else if (length > max_length || length < min_length) {
  alert("Password must be between 8 and 128 characters.");
  pass = false;
}
else if (isNaN(length)) {
  alert("Password length must be a number");
  pass = false;
}
else {
  pass = true;
}
}
while (pass === false);
////////////////////////////////////

do {
  var lower = 0;
  lower = prompt("Do you want to include lowercase letters?", "Y/N")
  if (lower === null) {
    return;
  }
 else if (lower === "Y" || lower === "y" || lower === "Yes" ) {
  pass = true;
  lower = true;
}
else if (lower === "N" || lower === "n" || lower === "No") {
  pass = true;
  lower = false;
}
else {
  pass = false;
}
}
while (pass === false);
/////////////////////////////////////

do {
  var upper = 0;
  upper = prompt("Do you want to include uppercase letters?", "Y/N")
  if (upper === null) {
    return;
  }
 else if (upper === "Y" || upper === "y" || upper === "Yes" ) {
  pass = true;
  upper = true;
}
else if (upper === "N" || upper === "n" || upper === "No") {
  pass = true;
  upper = false;
}
else {
  pass = false;
}
}
while (pass === false);
///////////////////////////////////////

do {
  var numeric = 0;
  numeric = prompt("Do you want to include numeric values?", "Y/N")
  if (numeric === null) {
    return;
  }
 else if (numeric === "Y" || numeric === "y" || numeric === "Yes" ) {
  pass = true;
  numeric = true;
}
else if (numeric === "N" || numeric === "n" || numeric === "No") {
  pass = true;
  numeric = false;
}
else {
  pass = false;
}
}
while (pass === false);
////////////////////////////////////////

do {
  var special = 0;
  special = prompt("Do you want to include special values?", "Y/N")
  if (special === null) {
    return;
  }
 else if (special === "Y" || special === "y" || special === "Yes" ) {
  pass = true;
  special = true;
}
else if (special === "N" || special === "n" || special === "No") {
  pass = true;
  special = false;
}
else {
  pass = false;
}
}
while (pass === false);

if (lower || upper || numeric || special) {
  pass = true;
}
else {
  confirm("You must select at least one character type");
} 
////////////////////////////////////////////////////

var opt1 = ''
var opt2 = ''
var opt3 = ''
var opt4 = ''


if (lower === true){
   opt1 = lowerCasedCharacters
} else {opt1 = ''}
if (upper === true){
   opt2 = upperCasedCharacters
} else {opt2 = ''}
if (numeric === true){
   opt3 = numericCharacters
} else {opt3 = ''}
if (special === true){
   opt4 = specialCharacters
} else {opt4 = ''}


  var passwd = ''
  var str = opt1 + opt2 + opt3 + opt4;
  
  for (let i = 1; i <= length; i++) {
    var char = Math.floor(Math.random() * str.length + 1);  
    passwd += str.charAt(char)
}
  return passwd.replace(/\,/g, '')
  
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
