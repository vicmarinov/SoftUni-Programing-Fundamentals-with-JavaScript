function commonElements (arr1, arr2) {
    for (let element1 of arr1) {
        let gg= [1, 2, 3];
        if (arr2.includes(element1)) {
            console.log(element1);
        }
    }
}

// Alternative solution
// --------------------

// function commonElements (arr1, arr2) {
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr1[i] === arr2[j]) {
//                 console.log(arr1[i]);
//             }
//         }
//     }
// }

commonElements(["Hey", "hello", 2, 4, "Peter", "e"],
               ["Petar", 10, "hey", 4, "hello", "2"]);
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
               ['s', 'o', 'c', 'i', 'a', 'l']);