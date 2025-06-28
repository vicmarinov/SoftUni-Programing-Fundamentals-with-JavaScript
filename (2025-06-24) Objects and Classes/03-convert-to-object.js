function convertToObject (JSONAsString) {
    let obj = JSON.parse(JSONAsString);

    for (let objEntry of Object.entries(obj)) {
        let [key, value] = objEntry;
        console.log(`${key}: ${value}`);
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');