function cardGame (inputArr) {
    function calculateCardValue (card) {
        let cardPower = card.slice(0, card.length - 1);
        let cardType = card[card.length - 1];

        switch (cardPower) {
            case 'J': cardPower = 11; break;
            case 'Q': cardPower = 12; break;
            case 'K': cardPower = 13; break;
            case 'A': cardPower = 14; break;
            default: cardPower = Number(cardPower); break;
        }

        switch (cardType) {
            case 'S': return cardPower * 4;
            case 'H': return cardPower * 3;
            case 'D': return cardPower * 2;
            case 'C': return cardPower * 1;
        }
    }

    // Alternative:
    // -----------

    // function calculateCardValue (card) {
    //     let cardPower = card.slice(0, card.length - 1);
    //     let cardType = card[card.length - 1];

    //     const letterCardsPower = new Map();
    //     letterCardsPower.set('J', 11);
    //     letterCardsPower.set('Q', 12);
    //     letterCardsPower.set('K', 13);
    //     letterCardsPower.set('A', 14);

    //     cardPower = letterCardsPower.get(cardPower) || Number(cardPower);

    //     switch (cardType) {
    //         case 'S': return cardPower * 4;
    //         case 'H': return cardPower * 3;
    //         case 'D': return cardPower * 2;
    //         case 'C': return cardPower * 1;
    //     }
    // }

    let playersCards = new Map();

    for (let inputLine of inputArr) {
        let [name, cards] = inputLine.split(": ");
        cards = cards.split(", ");

        if (!playersCards.has(name)) {
            playersCards.set(name, new Set(cards));
        } else {
            playersCards.set(name, new Set([...playersCards.get(name), ...cards]));
        }
    }
    
    let playersCardsTotalValue = new Map();

    for (let [name, cards] of playersCards) {
        let totalValue = 0;

        for (let card of cards) {
            totalValue += calculateCardValue(card)
        }

        playersCardsTotalValue.set(name, totalValue);
    }

    for (let [name, totalValue] of playersCardsTotalValue) {
        console.log(`${name}: ${totalValue}`);
    }
}

cardGame([
    "Peter: 2C, 4H, 9H, AS, QS",
    "Tomas: 3H, 10S, JC, KD, 5S, 10S",
    "Andrea: QH, QC, QS, QD",
    "Tomas: 6H, 7S, KC, KD, 5S, 10C",
    "Andrea: QH, QC, JS, JD, JC",
    "Peter: JD, JD, JD, JD, JD, JD"
]);

cardGame([
    "John: 2C, 4H, 9H, AS, QS",
    "Slav: 3H, 10S, JC, KD, 5S, 10S",
    "Alex: 6H, 7S, KC, KD, 5S, 10C",
    "Thomas: QH, QC, JS, JD, JC",
    "Slav: 6H, 7S, KC, KD, 5S, 10C",
    "Thomas: QH, QC, JS, JD, JC",
    "Alex: 6H, 7S, KC, KD, 5S, 10C",
    "Thomas: QH, QC, JS, JD, JC",
    "John: JD, JD, JD, JD"
]);