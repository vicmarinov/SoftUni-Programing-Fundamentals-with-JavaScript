function validatePassword (password) {
    function checkPasswordLength (password){
        return password.length >= 6 && password.length <= 10;
    }

    function checkPasswordChars (password) {
        for (let char of password) {
            let charASCIICode = char.charCodeAt(0);

            // ASCII Table Codes:
            // 'A' -> 65
            // 'Z' -> 90
            // 'a' -> 97
            // 'z' -> 122
            // '0' -> 48
            // '9' -> 57

            let isCharValid = (charASCIICode >= 65 && charASCIICode <= 90)  ||
                              (charASCIICode >= 97 && charASCIICode <= 122) ||
                              (charASCIICode >= 48 && charASCIICode <= 57);

            if (!isCharValid) {
                return false;
            }
        }

        return true;
    }

    function checkPasswordMinimumDigits (password) {
        let digitsQuantity = 0;

        for (let char of password) {
            let charASCIICode = char.charCodeAt(0);

            // ASCII Table Codes:
            // '0' -> 48
            // '9' -> 57

            if (charASCIICode >= 48 && charASCIICode <= 57) {
                digitsQuantity++;
            }
        }

        return digitsQuantity >= 2;
    }

    let isPasswordLengthValid  = checkPasswordLength(password);
    let arePasswordCharsValid  = checkPasswordChars(password);
    let arePasswordMinimumDigitsValid  = checkPasswordMinimumDigits(password);

    let isPasswordValid = isPasswordLengthValid &&
                          arePasswordCharsValid &&
                          arePasswordMinimumDigitsValid;

    if (isPasswordValid) {
        console.log("Password is valid");
    } else {
        if (!isPasswordLengthValid) {
            console.log("Password must be between 6 and 10 characters");
        }

        if (!arePasswordCharsValid) {
            console.log("Password must consist only of letters and digits");
        }

        if (!arePasswordMinimumDigitsValid) {
            console.log("Password must have at least 2 digits");
        }
    }
}

validatePassword("logIn");
validatePassword("MyPass123");
validatePassword("Pa$s$s");