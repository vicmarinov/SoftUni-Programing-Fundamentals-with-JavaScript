function buildAWall (sectionsInitialHeight) {
    // The total height of the wall is 30 feet. The `sectionsInitialHeight`
    // array contains the initial height (in feet) of each 1-mile section
    // of the wall. Each section has its own construction crew, which can
    // add 1 foot of height per day using 195 cubic yards of concrete. One
    // cubic yard of concrete costs 1,900 pesos. Once a section of the wall
    // is complete, its crew stops working.

    function sumArray (arr) {
        let sum = 0;

        for (let num of arr) {
            sum += num;
        }

        return sum;
    }

    let sectionsHeight = sectionsInitialHeight.slice();
    let concreteUsed = [];

    while (sectionsHeight.filter(x => x < 30).length > 0) {
        // Start a new day of building the wall

        let concreteUsedThisDay = 0;

        sectionsHeight = sectionsHeight.map(function (sectionHeight) {
            if (sectionHeight === 30) {
                return sectionHeight;
            }

            concreteUsedThisDay += 195;
            return sectionHeight + 1;
        })

        concreteUsed.push(concreteUsedThisDay);
    }

    console.log(concreteUsed.join(", "));
    console.log(`${sumArray(concreteUsed) * 1900} pesos`);
}

buildAWall([21, 25, 28]);
buildAWall([17]);
buildAWall([17, 22, 17, 19, 17]);