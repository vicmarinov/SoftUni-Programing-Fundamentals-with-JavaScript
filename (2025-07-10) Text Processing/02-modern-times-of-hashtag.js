function getHashtagsFromText (text) {
    function isValidHashtag (word) {
        if (!word.startsWith('#') || word.length <= 1) {
            return false;
        }

        let hashtag = word.substring(1);

        for (let char of hashtag) {
            if (!((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z'))) {
                return false;
            }
        }

        return true;
    }

    let hashtags = text
        .split(' ')
        .filter(word => isValidHashtag(word))
        .map(word => word.substring(1));

    for (let hashtag of hashtags) {
        console.log(hashtag);
    }
}

getHashtagsFromText("Nowadays everyone uses # to tag a #special word in #socialMedia");
getHashtagsFromText("The symbol # is known #variously in English-speaking #regions as the #number sign");