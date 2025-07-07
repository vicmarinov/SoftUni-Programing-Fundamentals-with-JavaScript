function legendaryFarming (inputString) {
    let keyMaterials = new Map();
    keyMaterials.set("shards", 0);
    keyMaterials.set("fragments", 0);
    keyMaterials.set("motes", 0);

    let junkMaterials = new Map();

    let legendaryItemObtained;

    let inputArr = inputString.split(' ');

    for (let i = 0; i < inputArr.length; i += 2) {
        let quantity = Number(inputArr[i]);
        let material = inputArr[i + 1].toLowerCase();

        if (keyMaterials.has(material)) {
            keyMaterials.set(material, keyMaterials.get(material) + quantity);

            if (keyMaterials.get(material) >= 250) {
                switch (material) {
                    case "shards":    legendaryItemObtained = "Shadowmourne"; break;
                    case "fragments": legendaryItemObtained = "Valanyr";      break;
                    case "motes":     legendaryItemObtained = "Dragonwrath";  break;
                }

                keyMaterials.set(material, keyMaterials.get(material) - 250);
                break;
            }
        } else {
            if (!junkMaterials.has(material)) {
                junkMaterials.set(material, quantity);
            } else {
                junkMaterials.set(material, junkMaterials.get(material) + quantity);
            }
        }
    }

    console.log(`${legendaryItemObtained} obtained!`);

    let keyMaterialsSorted = Array.from(keyMaterials).sort((a, b) =>  {
        if (a[1] !== b[1]) {
            return b[1] - a[1]
        } else {
            return a[0].localeCompare(b[0]);
        }
    });

    for (let [material, quantity] of keyMaterialsSorted) {
        console.log(`${material}: ${quantity}`);
    }

    for (let [material, quantity] of [...junkMaterials].sort((a, b) => a[0].localeCompare(b[0]))) {
        console.log(`${material}: ${quantity}`);
    }
}

legendaryFarming("3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards");
legendaryFarming("123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver");