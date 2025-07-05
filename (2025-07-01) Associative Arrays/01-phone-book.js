function solvePhoneBookProblem (infoArr) {
    let phoneBook = new Map();

    for (let record of infoArr) {
        let [name, phoneNumber] = record.split(' ');
        phoneBook.set(name, phoneNumber);
    }

    for (let name of phoneBook.keys()) {
        console.log(`${name} -> ${phoneBook.get(name)}`);
    }
}

solvePhoneBookProblem(["Tim 0834212554", "Peter 0877547887", "Bill 0896543112", "Tim 0876566344"]);
solvePhoneBookProblem(["George 0552554", "Peter 087587", "George 0453112", "Bill 0845344"]);