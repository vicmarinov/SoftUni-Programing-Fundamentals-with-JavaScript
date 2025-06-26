function sortAnArrayBy2Criteria (stringsArr) {
    let stringsArrSorted = stringsArr
        .sort((a, b) => a.length - b.length !== 0 ? a.length - b.length : a.localeCompare(b));
    
    console.log(stringsArrSorted.join("\n"));
}

sortAnArrayBy2Criteria(["alpha", "beta", "gamma"]);
sortAnArrayBy2Criteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);