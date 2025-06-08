function spiceMustFlow (startingYield) {
    let days = 0;
    let spiceMined = 0;

    let dailyYield = startingYield;

    while (dailyYield >= 100) {
        days++;
        spiceMined += dailyYield;
        dailyYield -= 10;
        spiceMined -= 26;
    }

    if (days > 0) {
        spiceMined -= 26;
    }

    console.log(days);
    console.log(spiceMined);
}

spiceMustFlow(111);
spiceMustFlow(450);
spiceMustFlow(5);