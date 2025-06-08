function requiredReading (pagesQuantity, pagesReadInOneHour, daysReading) {
    let hoursReadingTotal = pagesQuantity / pagesReadInOneHour;
    let hoursReadingDaily = hoursReadingTotal / daysReading;

    console.log(hoursReadingDaily);
}

requiredReading(212, 20, 2);
requiredReading(432, 15, 4);