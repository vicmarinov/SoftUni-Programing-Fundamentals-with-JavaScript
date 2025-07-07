function arenaTier (commandsArr) {
    let gladiators = new Map();

    for (let command of commandsArr) {
        if (command.includes(" -> ")) {
            let [gladiatorName, technique, skill] = command.split(" -> ");
            skill = Number(skill);

            if (!gladiators.has(gladiatorName)) {
                gladiators.set(gladiatorName, new Map());
            }

            if(gladiators.get(gladiatorName).has(technique)) {
                skill = Math.max(skill, gladiators.get(gladiatorName).get(technique));
            }

            gladiators.get(gladiatorName).set(technique, skill);

        } else if (command.includes(" vs ")) {
            let [gladiator1Name, gladiator2Name] = command.split(" vs ");

            if (!(gladiators.has(gladiator1Name) && gladiators.has(gladiator2Name))) {
                continue;
            }

            let gladiator1TotalCommonSkills = 0;

            for (let [technique, skill] of gladiators.get(gladiator1Name)) {
                if (gladiators.get(gladiator2Name).has(technique)) {
                    gladiator1TotalCommonSkills += skill;
                }
            }

            let gladiator2TotalCommonSkills = 0;

            for (let [technique, skill] of gladiators.get(gladiator2Name)) {
                if (gladiators.get(gladiator1Name).has(technique)) {
                    gladiator2TotalCommonSkills += skill;
                }
            }

            if (gladiator1TotalCommonSkills === 0) {
                continue;
            } else if (gladiator1TotalCommonSkills > gladiator2TotalCommonSkills) {
                gladiators.delete(gladiator2Name);
            } else if (gladiator2TotalCommonSkills > gladiator1TotalCommonSkills) {
                gladiators.delete(gladiator1Name);
            }

        } else if (command === "Ave Cesar") {
            break;
        }
    }

    function calculateTotalSkill (techniquesMap) {
        let totalSkill = 0;

        for (let skill of techniquesMap.values()) {
            totalSkill += skill;
        }

        return totalSkill;
    }

    let gladiatorsSorted = Array.from(gladiators).sort((gladiatorA, gladiatorB) => {
        if (calculateTotalSkill(gladiatorA[1]) !== calculateTotalSkill(gladiatorB[1])) {
            return calculateTotalSkill(gladiatorB[1]) - calculateTotalSkill(gladiatorA[1]);
        } else {
            return gladiatorA[0].localeCompare(gladiatorB[0]);
        }
    });

    for (let [name, techniquesMap] of gladiatorsSorted) {
        console.log(`${name}: ${calculateTotalSkill(techniquesMap)} skill`);

        let techniquesSorted = Array.from(techniquesMap).sort((techniqueA, techniqueB) => {
            if (techniqueA[1] !== techniqueB[1]) {
                return techniqueB[1] - techniqueA[1];
            } else {
                return techniqueA[0].localeCompare(techniqueB[0]);
            }
        })

        for (let [technique, skill] of techniquesSorted) {
            console.log(`- ${technique} <!> ${skill}`);
        }
    }
}

arenaTier([
    "Peter -> BattleCry -> 400",
    "Alex -> PowerPunch -> 300",
    "Stefan -> Duck -> 200",
    "Stefan -> Tiger -> 250",
    "Ave Cesar"
]);

arenaTier([
    "Peter -> Duck -> 400",
    "Julius -> Shield -> 150",
    "Gladius -> Heal -> 200",
    "Gladius -> Support -> 250",
    "Gladius -> Shield -> 250",
    "Peter vs Gladius",
    "Gladius vs Julius",
    "Gladius vs Maximilian",
    "Ave Cesar"
]);