function travelTime (inputArr) {
    let destinationsCosts = new Map();

    for (let inputLine of inputArr) {
        let [country, city, travelCosts] = inputLine.split(" > ");
        travelCosts = Number(travelCosts);

        if (!destinationsCosts.has(country)) {
            destinationsCosts.set(country, new Map());
        }

        if (!destinationsCosts.get(country).has(city)) {
            destinationsCosts.get(country).set(city, travelCosts);
        } else {
            let minTravelCosts = Math.min(destinationsCosts.get(country).get(city), travelCosts);
            destinationsCosts.get(country).set(city, minTravelCosts);
        }
    }

    for (let [country, cities] of [...destinationsCosts].sort((a, b) => a[0].localeCompare(b[0]))) {
        let resultLine = `${country} ->`;

        for (let [city, travelCosts] of [...cities].sort((a, b) => a[1] - b[1])) {
            resultLine += ` ${city} -> ${travelCosts}`;
        }

        console.log(resultLine);
    }
}

travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]);

travelTime([
    "Bulgaria > Sofia > 25000",
    "Bulgaria > Sofia > 25000",
    "Kalimdor > Orgrimar > 25000",
    "Albania > Tirana > 25000",
    "Bulgaria > Varna > 25010",
    "Bulgaria > Lukovit > 10"
]);