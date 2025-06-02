function bitcoinsAndMining (minedGoldByDays) {
    let totalGoldMined = 0;
    let firstBitcoinPurchasedDay;

    for (let index = 0; index < minedGoldByDays.length; index++) {
        let day = index + 1;

        let minedGoldToday = minedGoldByDays[index];
        if(day % 3 === 0) {
            minedGoldToday *= 0.7;
        }
        totalGoldMined += minedGoldToday;

        if (firstBitcoinPurchasedDay === undefined && totalGoldMined * 67.51 >= 11949.16) {
            firstBitcoinPurchasedDay = day;
        }
    }

    let totalBitcoinsPurchased = Math.floor(totalGoldMined * 67.51 / 11949.16);
    let leftMoney = totalGoldMined * 67.51 - totalBitcoinsPurchased * 11949.16;

    console.log(`Bought bitcoins: ${totalBitcoinsPurchased}`);
    if (totalBitcoinsPurchased > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinPurchasedDay}`);
    }
    console.log(`Left money: ${leftMoney.toFixed(2)} lv.`);
}

bitcoinsAndMining([100, 200, 300]);
bitcoinsAndMining([50, 100]);
bitcoinsAndMining([3124.15, 504.212, 2511.124]);