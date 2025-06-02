function login (inputArray) {
    // According to the problem statement, the correct password is the username reversed.
    let username = inputArray[0];
    let password = username.split("").reverse().join("");
    // .split("") — splits the string into an array using "" as the separator
    // .reverse() — reverses the order of elements in the array
    // .join("") — joins the elements of an array into a string with "" as the separator

    // Alternative:
    // -----------

    // let password = "";
    // for (let i = username.length - 1; i >= 0; i--) {
    //     password += username[i];
    // }

    let index = 1; // The first element of the inputArray is the username,
                   // and we iterate through the other elements.

    let attempts = 0;
    while (attempts < 4) {
        let passwordEntered = inputArray[index];
        index++;

        attempts++

        if (passwordEntered === password) {
            console.log(`User ${username} logged in.`);
            break;
        } else if (attempts >= 4) {
            console.log(`User ${username} blocked!`);
            break;
        } else {
            console.log("Incorrect password. Try again.");
        }
    }
}

login(["Acer", "login", "go", "let me in", "recA"]);
login(["momo", "omom"]);
login(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);