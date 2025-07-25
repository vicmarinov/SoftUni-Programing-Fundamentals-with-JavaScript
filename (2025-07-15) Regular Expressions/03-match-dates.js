function matchDates (textInArr) {
    let text = textInArr[0];
    let regExpr = /\b(?<day>[0-3][0-9])(\.|-|\/)(?<month>Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\2(?<year>\d{4})\b/g;

    for (let match of Array.from(text.matchAll(regExpr))) {
        let {day, month, year} = match.groups;
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }
}

matchDates(["13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016"]);
matchDates(["1/Jan-1951 23/october/197 11-Dec-2010 18.Jan.2014"]);