//Declares the function isValidPassword and ensures that the password meets the requirements
function isValidPassword(username , password) {
    if (password.length < 8) {
        return false;
    }

    if (password.includes(" ")) {
        return false;
    }

    if (password.includes(username)) {
        return false;
    }

    return true;
}

//Asks the user to enter their username and saves it under the variable username
let username = prompt("Enter your username:");

//Asks the user to enter their password and saves it under the variable password
let password = prompt("Enter your password:");


//Checks that the password is valid
if (isValidPassword(username , password)) {
    console.log("The password is valid!");
        } else {
    console.log("Invalid password! Make sure it is at least 8 characters, does not contain spaces, and does not contain the username.");
}