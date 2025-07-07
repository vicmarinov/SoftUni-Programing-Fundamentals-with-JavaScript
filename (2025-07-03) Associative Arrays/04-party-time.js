function partyTime (inputArr) {
    function isGuestNoVIP (guestNo) {
        return guestNo.charCodeAt(0) >= 48 && guestNo.charCodeAt(0) <= 57;
    }

    let allGuestsList = inputArr.slice(0, inputArr.indexOf("PARTY"));
    let allGuestsComing = inputArr.slice(inputArr.indexOf("PARTY") + 1);

    let vipGuestsList = allGuestsList.filter(guest => isGuestNoVIP(guest));
    let regularGuestsList = allGuestsList.filter(guest => !isGuestNoVIP(guest));
    
    let vipGuestsWhoDidNotCame = vipGuestsList.slice();
    let regularGuestsWhoDidNotCame = regularGuestsList.slice();

    for (let guestNo of allGuestsComing) {
        if (isGuestNoVIP(guestNo)) {
            vipGuestsWhoDidNotCame
                .splice(vipGuestsWhoDidNotCame.indexOf(guestNo), 1);
        } else {
            regularGuestsWhoDidNotCame
                .splice(regularGuestsWhoDidNotCame.indexOf(guestNo), 1);
        }
    }
    
    console.log(vipGuestsWhoDidNotCame.length + regularGuestsWhoDidNotCame.length);
    console.log([...vipGuestsWhoDidNotCame, ...regularGuestsWhoDidNotCame].join("\n"));
}

partyTime([
    "7IK9Yo0h", "9NoBUajQ", "Ce8vwPmE", "SVQXQCbc", "tSzE5t0p",
    "PARTY",
    "9NoBUajQ", "Ce8vwPmE", "SVQXQCbc"
]);

partyTime([
    "m8rfQBvl", "fc1oZCE0", "UgffRkOn", "7ugX7bm0", "9CQBGUeJ",
    "2FQZT3uC", "dziNz78I", "mdSGyQCJ", "LjcVpmDL", "fPXNHpm1",
    "HTTbwRmM", "B5yTkMQi", "8N0FThqG", "xys2FYzn", "MDzcM9ZK",
    "PARTY",
    "2FQZT3uC", "dziNz78I", "mdSGyQCJ", "LjcVpmDL", "fPXNHpm1",
    "HTTbwRmM", "B5yTkMQi", "8N0FThqG", "m8rfQBvl", "fc1oZCE0",
    "UgffRkOn", "7ugX7bm0", "9CQBGUeJ"
]);