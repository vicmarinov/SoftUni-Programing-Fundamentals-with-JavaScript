function distinctArray (arr) {
    let distinctArr = arr
        .filter((value, index, self) => self.indexOf(value ) === index);
    
    console.log(distinctArr.join(' '));
}

// Alternative solution
// --------------------

// function distinctArray (arr) {
//     let distinctArr = [];

//     for (let element of arr) {
//         if (!distinctArr.includes(element)) {
//             distinctArr.push(element);
//         }
//     }

//     console.log(distinctArr.join(' '));
// }

distinctArray([1, 2, 3, 4]);
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);