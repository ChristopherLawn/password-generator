// 'GENERATE PASSWORD' FUNCTION
function generatePassword() {

    // ARRAYS
    var lowCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var upCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Z"];
    var numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var charArray = ["!", "@", "#", "$", "%", "^", "&", "*", "?"];
    
    var passLengthConfirm = window.prompt("Password length: Please enter a number of at least 8 & no more than 128");
    var numLength = parseInt(passLengthConfirm);

    if (numLength >= 8 && numLength <= 128) {
    } else {
        window.alert("You must enter a valid number between 8 - 128")
        return generatePassword()
    };
  
    var megaArray = [];

    var lowerConfirm = window.confirm("Would you like to include lower-case letters? If yes, click 'OK'. If no, click 'Cancel'.")
      if (lowerConfirm === true) {
      megaArray = megaArray.concat(lowCaseArray)
    };

    var upperConfirm = window.confirm("Would you like to include upper-case letters? If yes, click 'OK'. If no, click 'Cancel'.")
      if (upperConfirm === true) {
      megaArray = megaArray.concat(upCaseArray)
    };

    var numberConfirm = window.confirm("Would you like to include numbers? If yes, click 'OK'. If no, click 'Cancel'.")
      if (numberConfirm === true) {
      megaArray = megaArray.concat(numArray)
    };

    var charConfirm = window.confirm("Would you like to include special characters? If yes, click 'OK'. If no, click 'Cancel'.")
      if (charConfirm === true) {
      megaArray = megaArray.concat(charArray)
    };

    if (!lowerConfirm && !upperConfirm && !numberConfirm && !charConfirm) {
      window.confirm("You need to choose at least one character type!")
      return generatePassword()
    };

    var times = numLength;
    var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
    };

    var password = ""
      for (var i = 0; i < times; i++){
        var random = randomNumber(0, megaArray.length - 1);
        var randomChar = megaArray[random];
        password = password + randomChar;
      }
    return password;
    };

    var generateBtn = document.querySelector("#generate");

    function writePassword() {
      var password = generatePassword();
      var passwordText = document.querySelector("#password");
      passwordText.value = password;
};

generateBtn.addEventListener("click", writePassword);