function palindromeIntegers (numsArr) {
    function checkPalindrome (num) {
        let numAsString = String(num);
        
        let isPalindrome = true;
        for (let i = 0; i <= numAsString.length / 2 - 1; i++) {
            if (numAsString[i] !== numAsString[numAsString.length - 1 - i]) {
                isPalindrome = false;
            }
        }

        return isPalindrome;
    }

    for (let num of numsArr) {
        console.log(checkPalindrome(num));
    }
}

palindromeIntegers([123, 323, 421, 121]);
palindromeIntegers([32, 2, 232, 1010]);