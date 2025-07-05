function solveAddressBookProblem (infoArr) {
    let addressBook = new Map();

    for (let record of infoArr) {
        let [personName, personAddress] = record.split(':');
        addressBook.set(personName, personAddress);
    }

    let addressBookNamesSorted = Array.from(addressBook.keys())
        .sort((a, b) => a.localeCompare(b));
    
    for (let name of addressBookNamesSorted) {
        console.log(`${name} -> ${addressBook.get(name)}`);
    }
}

solveAddressBookProblem([
    "Tim:Doe Crossing",
    "Bill:Nelson Place",
    "Peter:Carlyle Ave",
    "Bill:Ornery Rd"
]);

solveAddressBookProblem([
    "Bob:Huxley Rd",
    "John:Milwaukee Crossing",
    "Peter:Fordem Ave",
    "Bob:Redwing Ave",
    "George:Mesta Crossing",
    "Ted:Gateway Way",
    "Bill:Gateway Way",
    "John:Grover Rd",
    "Peter:Huxley Rd",
    "Jeff:Gateway Way",
    "Jeff:Huxley Rd"
]);