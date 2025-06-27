function gladiatorInventory (inputArr) {
    function addElement (arr, element) {
        let resultArr = arr.slice();

        if (!resultArr.includes(element)) {
            resultArr.push(element);
        }

        return resultArr;
    }

    function addElementAfterAnotherElement (arr, elementToAddAfter, elementToAdd) {
        let resultArr = arr.slice();

        if (resultArr.includes(elementToAddAfter)) {
            let indexToAddAt = arr.indexOf(elementToAddAfter) + 1;
            resultArr.splice(indexToAddAt, 0, elementToAdd);
        }

        return resultArr;
    }
    
    function removeElement (arr, element) {
        let resultArr = arr.slice();
        
        if (resultArr.includes(element)) {
            let indexToRemove = arr.indexOf(element);
            resultArr.splice(indexToRemove, 1);
        }
        
        return resultArr;
    }
    
    let inventory = inputArr[0].split(' ');
    let commands = inputArr.slice(1);

    for (let command of commands) {
        let [commandType, commandDetails] = command.split(' ');

        switch (commandType) {
            case "Buy":
                inventory = addElement(inventory, commandDetails);
                break;
            case "Trash":
                inventory = removeElement(inventory, commandDetails);
                break;
            case "Repair":
                inventory = removeElement(inventory, commandDetails);
                inventory = addElement(inventory, commandDetails);
                break;
            case "Upgrade":
                let [equipmentToUpgrade, upgradeDetails] = commandDetails.split('-');
                let equipmentUpgraded = `${equipmentToUpgrade}:${upgradeDetails}`;
                inventory = addElementAfterAnotherElement(inventory, equipmentToUpgrade, equipmentUpgraded);
                break;
        }
    }

    console.log(inventory.join(' '));
}

// Alternative solution
// --------------------

// function gladiatorInventory (inputArr) {    
//     let inventory = inputArr[0].split(' ');
//     let commands = inputArr.slice(1);

//     for (let command of commands) {
//         let [commandType, commandDetails] = command.split(' ');

//         switch (commandType) {
//             case "Buy":
//                 if (!inventory.includes(commandDetails)) {
//                     inventory.push(commandDetails);
//                 }
//                 break;
//             case "Trash":
//                 if (inventory.includes(commandDetails)) {
//                     inventory.splice(inventory.indexOf(commandDetails), 1);
//                 }
//                 break;
//             case "Repair":
//                 if (inventory.includes(commandDetails)) {
//                     inventory.splice(inventory.indexOf(commandDetails), 1);
//                     inventory.push(commandDetails);
//                 }
//                 break;
//             case "Upgrade":
//                 let [equipmentToUpgrade, upgradeDetails] = commandDetails.split('-');
                
//                 if (inventory.includes(equipmentToUpgrade)) {
//                     let equipmentUpgraded = `${equipmentToUpgrade}:${upgradeDetails}`;
//                     let indexToAddAt = inventory.indexOf(equipmentToUpgrade) + 1;
//                     inventory.splice(indexToAddAt, 0, equipmentUpgraded);
//                 }

//                 break;
//         }
//     }

//     console.log(inventory.join(' '));
// }

gladiatorInventory([
    "SWORD Shield Spear",
    "Buy Bag",
    "Trash Shield",
    "Repair Spear",
    "Upgrade SWORD-Steel"
]);

gladiatorInventory([
    "SWORD Shield Spear",
    "Trash Bow",
    "Repair Shield",
    "Upgrade Helmet-V"
]);