function addAndSubtract (arr) {
    let sumBefore = 0;
    let sumAfter = 0;

    for (let i = 0; i < arr.length; i++) {
        sumBefore += arr[i];

        if (arr[i] % 2 === 0) {
            arr[i] += i;
        } else {
            arr[i] -= i;
        }

        sumAfter += arr[i];
    }

    console.log(arr);
    console.log(sumBefore);
    console.log(sumAfter);
}

addAndSubtract([5, 15, 23, 56, 35]);
addAndSubtract([-5, 11, 3, 0, 2]);