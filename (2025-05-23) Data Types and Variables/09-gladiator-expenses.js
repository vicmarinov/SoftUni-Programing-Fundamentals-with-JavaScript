function gladiatorExpenses (fightsLost, helmetPrice, swordPrice, shieldPrice, armourPrice) {

    // Every second lost game, the gladiator's helmet is broken.
    // Every third lost game, the gladiator's sword is broken.
    // When both his sword and helmet are broken in the same lost fight, the gladiator's shield also breaks.
    // Every second time, when the gladiator's shield brakes, his armor also needs to be repaired.

    let helmetsRepaired = parseInt(fightsLost      / 2);
    let swordsRepaired  = parseInt(fightsLost      / 3);
    let shieldsRepaired = parseInt(fightsLost      / 6);
    let armoursRepaired = parseInt(shieldsRepaired / 2);

    let expensesTotal = helmetsRepaired * helmetPrice + swordsRepaired * swordPrice +
                        shieldsRepaired * shieldPrice + armoursRepaired * armourPrice;

    console.log(`Gladiator expenses: ${expensesTotal.toFixed(2)} aureus`);
}

gladiatorExpenses(7, 2, 3, 4, 5);
gladiatorExpenses(23, 12.50, 21.50, 40, 200);