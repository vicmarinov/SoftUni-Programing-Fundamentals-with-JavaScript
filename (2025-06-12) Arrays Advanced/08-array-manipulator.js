function arrayManipulator (numsArr, commandsArr) {
    function addNum (arr, index, num) {
        let resultArr = arr.slice();
        resultArr.splice(index, 0, num);
        return resultArr;
    }

    function addManyNums (arr, index, numsToAddArr) {
        let resultArr = arr.slice();
        resultArr.splice(index, 0, ...numsToAddArr);
        return resultArr;
    }

    function checkContaining (arr, num) {
        return arr.indexOf(num);
    }

    function removeNum (arr, indexToRemove) {
        let resultArr = arr.slice();
        resultArr.splice(indexToRemove, 1);
        return resultArr;
    }

    function shiftNums (arr, positionsToShift) {
        let resultArr = [];

        let positionsToShiftReal = positionsToShift % arr.length;
        resultArr.push(...arr.slice(positionsToShiftReal));
        resultArr.push(...arr.slice(0, positionsToShiftReal));

        return resultArr;
    }

    function sumPairs (arr) {
        let resultArr = [];
        
        for (let i = 0; i < arr.length - 1; i += 2) {
            resultArr.push(arr[i] + arr[i + 1]);
        }

        if (arr.length % 2 !== 0) {
            resultArr.push(arr[arr.length - 1]);
        }

        return resultArr;
    }

    function formatArrayToString (arr) {
        return `[ ${arr.join(", ")} ]`;
    }

    let nums = numsArr.slice();
    let commands = commandsArr.slice();

    for (let command of commands) {
        if (command.includes("add ")) {
            let [_, index, num] = command.split(' ').map(Number);
            nums = addNum(nums, index, num);
        } else if (command.includes("addMany ")) {
            let [_, index, ...numToAddArr] = command.split(' ').map(Number);
            nums = addManyNums(nums, index, numToAddArr);
        } else if (command.includes("contains ")) {
            let [_, num] = command.split(' ').map(Number);
            console.log(checkContaining(nums, num));
        } else if (command.includes("remove ")) {
            let [_, index] = command.split(' ').map(Number);
            nums = removeNum(nums, index);
        } else if (command.includes("shift ")) {
            let [_, positionsToShift] = command.split(' ').map(Number);
            nums = shiftNums(nums, positionsToShift);
        } else if (command === "sumPairs") {
            nums = sumPairs(nums);
        } else if (command === "print") {
            console.log(formatArrayToString(nums));
            break;
        }
    }
}

arrayManipulator(
    [1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print']
);

arrayManipulator(
    [1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
);