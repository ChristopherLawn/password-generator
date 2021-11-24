// Assignment code here
var lowCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Z"];
var numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var charArray = ["!", "@", "#", "$", "%", "^", "&", "*"];


function generatePassword() {
  //var lengthPrompt = window.prompt("Please choose a length of at least 8 characters & no more than 128 characters")
  //var numLength = parseInt(lengthPrompt)
  //if (numLength >= 8 || numLength <= 128) {
    

  //} else {
    // error
  //}

  var numLength;
  // do {
  //   var passLengthConfirm = window.prompt("Please enter a length at least 8 & no more than 128")
  //   numLength = parseInt(passwordLength)
  // } while (numLength < 8 || numLength > 128)

  // var validNumber = false
  // do {
    
    var passLengthConfirm = window.prompt("Please enter a length at least 8 & no more than 128")
    numLength = parseInt(passLengthConfirm)

    if (numLength >= 8 && numLength <= 128) {
      // THEN: function to select length of password & tell megaArray how many character to provide & add randomizer to randomize it
      // window.alert("great job, it's a good number")
    } else {
        window.alert("You must enter a valid number between 8 - 128")
        return generatePassword()
      // }
      // validNumber = true 
    }
    
  // } while (!validNumber)
  
  var megaArray = []

    var lowerConfirm = window.confirm("Would you like to include lower-case letters?")
      if (lowerConfirm === true) {
      // function for adding to mega-array
      // megaArray.push(lowCaseArray)
      
      // options
      // megaArray.push("every","letter","dont","have","separate","array")
      megaArray = megaArray.concat(lowCaseArray)
      // do not recomment for course - megaArray.push.apply(megaArray, lowCaseArray)
      // does not exist - megaArray.pushInto(lowCaseArray)
    };

    var upperConfirm = window.confirm("Would you like to include upper-case letters?")
      if (upperConfirm === true) {
      // function for adding to mega-array
      // megaArray.push(lowCaseArray)
      
      // options
      // megaArray.push("every","letter","dont","have","separate","array")
      megaArray = megaArray.concat(upCaseArray)
      // do not recomment for course - megaArray.push.apply(megaArray, lowCaseArray)
      // does not exist - megaArray.pushInto(lowCaseArray)
    };

    var numberConfirm = window.confirm("Would you like to include numbers?")
    if (numberConfirm === true) {
      // function for adding to mega-array
      // megaArray.push(lowCaseArray)
      
      // options
      // megaArray.push("every","letter","dont","have","separate","array")
      megaArray = megaArray.concat(numArray)
      // do not recomment for course - megaArray.push.apply(megaArray, lowCaseArray)
      // does not exist - megaArray.pushInto(lowCaseArray)
    };

    var charConfirm = window.confirm("Would you like to include special characters?")
    if (charConfirm === true) {
      // function for adding to mega-array
      // megaArray.push(lowCaseArray)
      
      // options
      // megaArray.push("every","letter","dont","have","separate","array")
      megaArray = megaArray.concat(charArray)
      // do not recomment for course - megaArray.push.apply(megaArray, lowCaseArray)
      // does not exist - megaArray.pushInto(lowCaseArray)
    };

 console.log(megaArray);
}

// function to generate a random numeric value
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// THIS IS A TEST CODE FOR GIT