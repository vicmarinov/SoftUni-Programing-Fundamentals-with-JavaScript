function printCityInfo (cityObject) {
    for (let cityObjectEntry of Object.entries(cityObject)) {
        let [key, value] = cityObjectEntry;
        console.log(`${key} -> ${value}`);
    }
}

printCityInfo({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});

printCityInfo({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
});