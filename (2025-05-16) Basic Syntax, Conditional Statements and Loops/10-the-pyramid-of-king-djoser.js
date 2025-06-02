function thePyramidOfKingDjoser (baseLength, layerHeight) {
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;

    let layer = 0;

    while (baseLength > 0) {
        layer++;

        if (baseLength - 2 > 0) {
            stone += Math.pow(baseLength - 2, 2) * layerHeight;

            if (layer % 5 === 0) {
                lapisLazuli += (4 * baseLength - 4) * layerHeight;
            } else {
                marble += (4 * baseLength - 4) * layerHeight;
            }
        } else {
            gold += Math.pow(baseLength, 2) * layerHeight;
        }
        
        baseLength -= 2;
    }

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(layer * layerHeight)}`);
}

thePyramidOfKingDjoser(11, 1);
thePyramidOfKingDjoser(11, 0.75);
thePyramidOfKingDjoser(12, 1);
thePyramidOfKingDjoser(23, 0.5);