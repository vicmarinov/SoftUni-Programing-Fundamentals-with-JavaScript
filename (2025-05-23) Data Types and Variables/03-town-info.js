function townInfo (townName, townPopulation, townArea) {
    let isAllDataValid = true;

    if (townName.length < 3) {
        console.log("Town name must be at least 3 characters!");
        isAllDataValid = false;
    }

    if (townPopulation < 0) {
        console.log("Population must be a positive number!");
        isAllDataValid = false;
    }

    if (townArea < 0) {
        console.log("Area must be a positive number!");
        isAllDataValid = false;
    }

    if (isAllDataValid) {
        console.log(`Town ${townName} has population of ${townPopulation} and area ${townArea} square km.`);
    }
}

townInfo("Sofia",   1286383, 492);
townInfo("LA",      1481353, 512);
townInfo("Plovdiv",  -45000, 100);
townInfo("Ka",         3600, -50);