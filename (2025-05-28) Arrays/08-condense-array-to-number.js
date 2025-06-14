function condenseArrayToNumber (nums) {
    let areNumsCondensed = nums.length === 1;

    while (!areNumsCondensed) {
        let newNumsArr = [];

        // We iterate through the array up to the element before the last element.
        for (let i = 0; i < nums.length - 1; i++) {
            newNumsArr.push(nums[i] + nums[i + 1]);
        }

        nums = newNumsArr;
        areNumsCondensed = newNumsArr.length === 1;
    }

    console.log(nums[0]);
}

condenseArrayToNumber([2, 10, 3]);
condenseArrayToNumber([5, 0, 4, 1, 2]);
condenseArrayToNumber([1]);