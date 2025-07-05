function schoolGrades (inputArr) {
    function findAverageOfNums (numsArr) {
        let sum = 0;

        for (let num of numsArr) {
            sum += num;
        }

        return sum / numsArr.length;
    }

    let gradesRecords = new Map();

    for (let command of inputArr) {
        let [student, ...grades] = command.split(' ');
        grades = grades.map(Number);

        if (gradesRecords.has(student)) {
            grades = [...gradesRecords.get(student), ...grades];
        }

        gradesRecords.set(student, grades);
    }

    for (let entry of Array.from(gradesRecords).sort((a, b) => a[0].localeCompare(b[0]))) {
        let [student, grades] = entry;
        console.log(`${student}: ${findAverageOfNums(grades).toFixed(2)}`);
    }
}

schoolGrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
schoolGrades(["Steven 3 5 6 4", "George 4 6", "Tammy 2 5 3", "Steven 6 3"]);