function printTownsObjects (townsTableRowsArr) {
    for (let row of townsTableRowsArr) {
        let [townName, townLatitude, townLongitude] = row.split(" | ");
        townLatitude = Number(townLatitude);
        townLongitude = Number(townLongitude);

        let town = {
            town: townName,
            latitude: townLatitude.toFixed(2),
            longitude: townLongitude.toFixed(2)
        };

        console.log(town);
    }
}

printTownsObjects([
    "Sofia | 42.696552 | 23.32601",
    "Beijing | 39.913818 | 116.363625"
]);

printTownsObjects([
    "Plovdiv | 136.45 | 812.575"
]);