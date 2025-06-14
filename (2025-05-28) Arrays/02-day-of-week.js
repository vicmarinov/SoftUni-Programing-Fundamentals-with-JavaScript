function dayOfWeek (weekDayNo) {
    const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    if (weekDayNo > 7 || weekDayNo < 1) {
        console.log("Invalid day!");
    } else {
        console.log(weekDays[weekDayNo - 1]);
    }
}

dayOfWeek(3);
dayOfWeek(6);
dayOfWeek(11);