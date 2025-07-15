function cutAndReverse (str) {
    let fistHalf = str
        .substring(0, str.length / 2)
        .split('')
        .reverse()
        .join('');

    let secondHalf = str
        .substring(str.length / 2)
        .split('')
        .reverse()
        .join('');

    console.log(fistHalf);
    console.log(secondHalf);
}

cutAndReverse("tluciffiDsIsihTgnizamAoSsIsihT");
cutAndReverse("sihToDtnaCuoYteBIboJsihTtAdooGoSmI");