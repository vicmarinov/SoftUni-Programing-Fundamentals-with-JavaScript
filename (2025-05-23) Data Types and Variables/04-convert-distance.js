function convertDistance (meters) {
    let kilometers = meters / 1000;
    console.log(`${meters} meters is equal to ${kilometers} kilometers.`);

    let miles = kilometers * 0.621371;
    console.log(`${kilometers} kilometers is equal to ${miles.toFixed(2)} miles.`);
}

convertDistance(1852);
convertDistance(798);