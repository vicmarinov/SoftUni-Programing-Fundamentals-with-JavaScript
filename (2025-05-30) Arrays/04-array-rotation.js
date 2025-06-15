function arrayRotation (arr, rotations) {
    rotations = rotations % arr.length;

    let resultArr = [];

    for (let i = rotations; i < arr.length; i++) {
        resultArr.push(arr[i]);
    }

    for (let i = 0; i < rotations; i++) {
        resultArr.push(arr[i]);
    }

    console.log(resultArr.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4);
arrayRotation([2, 4, 15, 31], 5);