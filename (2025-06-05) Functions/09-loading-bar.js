function printLoadingMessage (loadingPercent) {
    function getLoadingBarString (loadingPercent) {
        let completePartCharsQuantity = Number.parseInt(loadingPercent / 10);
        let incompletePartCharsQuantity = 10 - completePartCharsQuantity;

        return `[${'%'.repeat(completePartCharsQuantity)}${'.'.repeat(incompletePartCharsQuantity)}]`;
    }

    if (loadingPercent < 100) {
        console.log(`${loadingPercent}% ${getLoadingBarString(loadingPercent)}`);
        console.log("Still loading...");
    } else {
        console.log("100% Complete!");
        console.log("[%%%%%%%%%%]");
    }
}

printLoadingMessage(30);
printLoadingMessage(50);
printLoadingMessage(100);