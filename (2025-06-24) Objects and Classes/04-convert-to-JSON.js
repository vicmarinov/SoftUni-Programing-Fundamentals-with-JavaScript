function convertToJSON (name, lastName, hairColor) {
    let person = {
        name,
        lastName,
        hairColor
    };

    let jsonAsString = JSON.stringify(person);
    console.log(jsonAsString);
}

convertToJSON("George", "Jones", "Brown");
convertToJSON("Peter", "Smith", "Blond");