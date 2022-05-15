var charLength;
var includeSpecialChars;
var includeNumbers;
var includeUppercase;
var includeLowercase;
var newArr = [];

var specialChar = ["+", "-", "&", "!", "(", ")", "[", "]", "^",
"~", "*", "?", ":","/","#","@","$","%"];
var upperCases =['A','B', 'C', 'D','E', 'F', 'G', 'H','I', 'J', 'K', 'L', 'M', 'N','O', 'P', 'Q', 'R', 'S', 'T', 'U','V','W', 'X','Y', 'Z'];
var lowerCases=['a','b', 'c', 'd','e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n','o', 'p', 'q', 'r', 's', 't', 'u','v','w', 'x','y', 'z'];
var nums=['1','2','3','4','5','6','7','8','9','0'];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
    // get user input
    var validUserInput = getPasswordPreferences();
    //checking if the user inputs are valid
    if (validUserInput) {
        //grab html element to write password
        var passwordText = document.querySelector("#password");
        // generate password  and display it to the user
        passwordText.value = generatePassword();
    }
}

function generatePassword() {
    // Initialize an empty character pool. We will use character pool to get the random characters for our password.
    newArr = []
    // Initialize password to empty string.
    var password = "";

    // Add special chars to the character pool if needed.
    if (includeSpecialChars){
        newArr = newArr.concat(specialChar);
    }
    // Add Numbers to the character pool if needed. 
    if (includeNumbers) {
        newArr = newArr.concat(nums);
    }
    // Add Lowercases to the character pool if needed.
    if(includeLowercase){
        newArr = newArr.concat(lowerCases);
    }
    // Add Uppercases to the character pool if needed.
    if(includeUppercase) {
        newArr = newArr.concat(upperCases);
    }

    for ( var i =0; i < charLength; i++) {
        // Use Math.rondom generate random index between 0 and (newArr.length - 1)
        var randomNum = Math.floor(Math.random() * newArr.length);
        // Add the character at random index to the password.
        password += newArr[randomNum];
    }

    return password;

}

// This functions gets user passowrd preference from prompts.
function getPasswordPreferences() {
    // get a desired password length via prompt and save it as integer
    charLength = parseInt(prompt("How many characters you want in your password to be? (8 - 128 characters"));
    // check if  length of the password is valid
    if (isNaN(charLength) || charLength<8 || charLength>128) {
        alert('characters has to be numbers between 8-128 digits. Please try again');
        return false;
    }
    // Confirm if the user wants special character in their password
    includeSpecialChars = confirm('Would you like specialcharacter letters to be in your password');
    // Confirm if the user wants uppercases in their password
    includeUppercase = confirm('Would you like uppercase letters to be in your password');
    // Confirm if the user wants lowecases in their password
    includeLowercase = confirm('Would you like lowercase letters to be in your password');
    // Confirm if the user wants numbers in their password
    includeNumbers = confirm('Would you like Numbers to be in your password');
    return true;
}
