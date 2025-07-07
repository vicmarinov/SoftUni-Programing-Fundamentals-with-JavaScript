function solveCompanyUsersProblem (commands) {
    let companyUsers = new Map();

    for (let command of commands) {
        let [company, userID] = command.split(" -> ");

        if (!companyUsers.has(company)) {
            companyUsers.set(company, new Set([userID]));
        } else {
            companyUsers
                .set(company, new Set([...companyUsers.get(company), userID]))
        }
    }

    for (let [company, userIDs] of [...companyUsers].sort((a, b) => a[0].localeCompare(b[0]))) {
        console.log(company);

        for (let userID of userIDs) {
            console.log(`-- ${userID}`);
        }
    }
}

solveCompanyUsersProblem([
    "SoftUni -> AA12345",
    "SoftUni -> BB12345",
    "Microsoft -> CC12345",
    "HP -> BB12345"
]);

solveCompanyUsersProblem([
    "SoftUni -> AA12345",
    "SoftUni -> CC12344",
    "Lenovo -> XX23456",
    "SoftUni -> AA12345",
    "Movement -> DD11111"
]);