var generateBtn = document.querySelector('#generate');

// promts user for length and return empty string/refresh if outside of parameters
function generatePassword() {
  var length = prompt("Enter the length of the password (between 8 and 128 characters):");
  if (length === null) {
    return "";
  }
  length = parseInt(length);
  if (isNaN(length) || length < 8 || length > 128) {
    return generatePassword();
  }

  //prompts user to confirm presented criteria. 'cancel' will skip to next prompt without previous prompt applying.
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    return generatePassword();
  }

  // characters allotted for randomizer
  var charset = "";
  if (includeLowercase) {
    charset += "abcdefghijklmnopqrstuvwxyz";
  }
  if (includeUppercase) {
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (includeNumeric) {
    charset += "0123456789";
  }
  if (includeSpecial) {
    charset += "!@#$%^&*()_+";
  }

  // applies charsets to randomize
  var password = "";
  for (var i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }

  return password;
}


// generates password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

generateBtn.addEventListener('click', writePassword);