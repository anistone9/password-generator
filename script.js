//Looks for the "generate" id in the html document, and assigns the variable name of generateBtn
var generateBtn = document.querySelector("#generate");

//Looks for the "password" id in the html document, and assigns the variable name of passwordText
var passwordText = document.querySelector("#password");

//Criteria variables for user selection
var alphaLower = "abcdefghijklmnopqrstuvwxyz";
var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "01233456789";
var symbols = "!@#$%^&*_-+=";

var userNumbers;
var userSymbols;
var userLowerCase;
var userUpperCase;
var userPasswordLength;
var newPassword;

//Object for password length
var passwordLength = {
    type: "number",
    min: 8,
    max: 128
}

//Function to write a password using the criteria previously entered by the user
function writePassword() {
    //Prompt when user clicks the button to generate a new password
    var userClick = window.alert("Enter password criteria");
    //Prompt for user to select the password length
    userPasswordLength = window.prompt("Enter password length");
    if (userPasswordLength < passwordLength.min) {
        window.alert("Password needs to be at least 8 characters long");
        return;
    } else if (userPasswordLength > passwordLength.max) {
        window.alert("Password needs to be maximum 128 characters long");
        return;
    } else {
        console.log("OK to continue");
    }
    //Prompt for user to select the character types
    userCharType = window.alert("Select character types to include in the password");
    userNumbers = window.confirm("Include numeric characters?");
    userSymbols = window.confirm("Include symbols?");
    userLowerCase = window.confirm("Include lowercase characters?");
    userUpperCase = window.confirm("Include uppercase chacters?");
    //If user does not select at least one character type, then prompt to select again
    if (!userCharType && !userNumbers && !userSymbols && !userLowerCase && !userUpperCase) {
        window.alert("Select at least one character type for the password");
        return;
    }
    //After getting the user inputs, call on the generatePassword function to execute
    generatePassword();
    console.log("generatepassword");
}

//Function to generate a password using the criteria provided by the user in the function above
function generatePassword() {
    //Empty string variable
    var passwordCriteria = "";
    if (userNumbers) {
        passwordCriteria = passwordCriteria.concat(numbers);
        console.log(passwordCriteria);
    }
    if (userSymbols) {
        passwordCriteria = passwordCriteria.concat(symbols);
    }
    if (userLowerCase) {
        passwordCriteria = passwordCriteria.concat(alphaLower);
    }
    if (userUpperCase) {
        passwordCriteria = passwordCriteria.concat(alphaUpper);
    }
    console.log(userNumbers);
    var generatedPassword = "";
    //For loop to generate a password using the inputs from the user for length and character types
    for (var i = 0; i < userPasswordLength; i++) {
        //Random is between 0 and 1; multiplying it by 4 makes it between 0 and 4; Math.floor rounds the number down to the nearest full integer, making it 0 to 3
        //For each iteration of the for loop, get a random character in passwordCriteria veriable, and concatenate it to the generated password
        var index = Math.floor(Math.random() * passwordCriteria.length);
        generatedPassword = generatedPassword.concat(passwordCriteria[index]);
        console.log(generatedPassword);
    }
    passwordText.value = generatedPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);