var charLength;
var newArr = [];

var specialChar = ["+", "-", "&", "!", "(", ")", "{", "}", "[", "]", "^",
"~", "*", "?", ":","/","#","@","$","%"];
var upperCases =['A','B', 'C', 'D','E', 'F', 'G', 'H','I', 'J', 'K', 'L', 'M', 'N','O', 'P', 'Q', 'R', 'S', 'T', 'U','V','W', 'X','Y', 'Z'];
var lowerCases=['a','b', 'c', 'd','e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n','o', 'p', 'q', 'r', 's', 't', 'u','v','w', 'x','y', 'z'];
var nums=['1','2','3','4','5','6','7','8','9','0'];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

    var pagePrompts = getPrompts();
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function getPrompts() {
    newArr = [];

    charLength = parseInt(prompt("How many characters you want in your password to be? (8 - 128 characters"));

    if (isNaN(charLength) || charLength<8 ||charLength>128) {
        alert('characters has to be numbers between 8-128 digits. Please try again');
        return false;
    }
    if (confirm('Would you like specialcharacter letters to be in your password')){
        newArr=newArr.concat(specialChar);
    }
    if (confirm('Would you like uppercase letters to be in your password')) {
        newArr=newArr.concat(upperCases);
    }
    if (confirm('Would you like lowercase letters to be in your password')) {
        newArr=newArr.concat(lowerCases);
    }
    if (confirm('Would you like Numbers to be in your password')){
        newArr=newArr.concat(nums);
    }
    return true;

}
