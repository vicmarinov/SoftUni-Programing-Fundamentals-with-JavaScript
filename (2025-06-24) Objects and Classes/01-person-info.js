function getPersonObject (firstName, lastName, age) {
    let person = {
        firstName,
        lastName,
        age,
    };

    return person;
}

console.log(getPersonObject("Peter", "Pan", "20"));
console.log(getPersonObject("George", "Smith", "18"));