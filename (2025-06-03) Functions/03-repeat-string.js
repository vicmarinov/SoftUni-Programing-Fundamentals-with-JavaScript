function repeatString (string, timesToRepeat) {
    return string.repeat(timesToRepeat);
}

// Alternative solution
// --------------------

// function repeatString (string, timesToRepeat) {
//     let result = "";
    
//     for (let i = 1; i <= timesToRepeat; i++) {
//         result += string;
//     }

//     return result;
// }

console.log(repeatString("abc", 3));
console.log(repeatString("String", 2));