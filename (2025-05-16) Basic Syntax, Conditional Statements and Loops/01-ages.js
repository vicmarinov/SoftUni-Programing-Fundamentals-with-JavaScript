function ages (ageAsNumber) {
    if (ageAsNumber >= 66) {
        console.log("elder");
    } else if (ageAsNumber >= 20) {
        console.log("adult");
    } else if (ageAsNumber >= 14) {
        console.log("teenager");
    } else if (ageAsNumber >= 3) {
        console.log("child");
    } else if (ageAsNumber >= 0) {
        console.log("baby");
    } else {
        console.log("out of bounds");
    }
}

ages(20);
ages(1);
ages(100);
ages(-1);