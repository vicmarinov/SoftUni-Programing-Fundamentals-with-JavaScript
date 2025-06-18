function formatGrade (gradeNumerical) {
    let gradeText;

    if (gradeNumerical < 3.00) {
        gradeText = "Fail";
    } else if (gradeNumerical < 3.50) {
        gradeText = "Poor";
    } else if (gradeNumerical < 4.50) {
        gradeText = "Good";
    } else if (gradeNumerical < 5.50) {
        gradeText = "Very good";
    } else {
        gradeText = "Excellent";
    }

    if (gradeNumerical < 3.00) {
        console.log(`${gradeText} (2)`);
    } else {
        console.log(`${gradeText} (${gradeNumerical.toFixed(2)})`);
    }
}

formatGrade(3.33);
formatGrade(4.50);
formatGrade(2.99);