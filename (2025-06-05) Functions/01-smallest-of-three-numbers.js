function findTheSmallestOfThreeNumbers (numFirst, numSecond, numThird) {
    function findTheSmallerNumber (numFirst, numSecond) {
        return numFirst < numSecond ? numFirst : numSecond;
    }

    console.log(findTheSmallerNumber(findTheSmallerNumber(numFirst, numSecond), numThird));
}

findTheSmallestOfThreeNumbers(2, 5, 3);
findTheSmallestOfThreeNumbers(600, 342, 123);
findTheSmallestOfThreeNumbers(25, 21, 4);
findTheSmallestOfThreeNumbers(2, 2, 2);