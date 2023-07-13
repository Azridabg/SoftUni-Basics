function newHouse(input) {
    let flowerType = input[0];
    let flowers = Number(input[1]);
    let budjet = Number(input[2]);

    if (flowerType == 'Roses' && flowers > 80) {
        let finalSum = ((flowers * 5) * 0.9);

        if (budjet - finalSum >= 0) {
            let moneyLeft = budjet - finalSum;
            console.log(`Hey, you have a great garden with ${flowers} ${flowerType} and ${(moneyLeft).toFixed(2)} leva left.`);
        }
        else if (budjet - finalSum < 0) {
            let moneyNeeded = finalSum - budjet;
            console.log(`Not enough money, you need ${(moneyNeeded).toFixed(2)} leva more.`);
        }
    }
    else if (flowerType == 'Roses' && flowers <= 80) {
        let finalSum = flowers * 5;

        if (budjet - finalSum >= 0) {
            let moneyLeft = budjet - finalSum;
            console.log(`Hey, you have a great garden with ${flowers} ${flowerType} and ${(moneyLeft).toFixed(2)} leva left.`);
        }
        else if (budjet - finalSum < 0) {
            let moneyNeeded = finalSum - budjet;
            console.log(`Not enough money, you need ${(moneyNeeded).toFixed(2)} leva more.`);
        }
    }

    else if (flowerType == 'Dahlias' && flowers > 90) {
        let finalSum = ((flowers * 3.80) * 0.85);

        if (budjet - finalSum >= 0) {
            let moneyLeft = budjet - finalSum;
            console.log(`Hey, you have a great garden with ${flowers} ${flowerType} and ${(moneyLeft).toFixed(2)} leva left.`);
        }
        else if (budjet - finalSum < 0) {
            let moneyNeeded = finalSum - budjet;
            console.log(`Not enough money, you need ${(moneyNeeded).toFixed(2)} leva more.`);
        }
    }
    else if (flowerType == 'Dahlias' && flowers <= 90) {
        let finalSum = flowers * 3.80;

        if (budjet - finalSum >= 0) {
            let moneyLeft = budjet - finalSum;
            console.log(`Hey, you have a great garden with ${flowers} ${flowerType} and ${(moneyLeft).toFixed(2)} leva left.`);
        }
        else if (budjet - finalSum < 0) {
            let moneyNeeded = finalSum - budjet;
            console.log(`Not enough money, you need ${(moneyNeeded).toFixed(2)} leva more.`);
        }
    }

    else if (flowerType == 'Tulips' && flowers > 80) {
        let finalSum = ((flowers * 2.80) * 0.85);

        if (budjet - finalSum >= 0) {
            let moneyLeft = budjet - finalSum;
            console.log(`Hey, you have a great garden with ${flowers} ${flowerType} and ${(moneyLeft).toFixed(2)} leva left.`);
        }
        else if (budjet - finalSum < 0) {
            let moneyNeeded = finalSum - budjet;
            console.log(`Not enough money, you need ${(moneyNeeded).toFixed(2)} leva more.`);
        }
    }
    else if (flowerType == 'Tulips' && flowers <= 80) {
        let finalSum = flowers * 2.80;

        if (budjet - finalSum >= 0) {
            let moneyLeft = budjet - finalSum;
            console.log(`Hey, you have a great garden with ${flowers} ${flowerType} and ${(moneyLeft).toFixed(2)} leva left.`);
        }
        else if (budjet - finalSum < 0) {
            let moneyNeeded = finalSum - budjet;
            console.log(`Not enough money, you need ${(moneyNeeded).toFixed(2)} leva more.`);
        }
    }

    else if (flowerType == 'Narcissus' && flowers >= 120) {
        let finalSum = (flowers * 3) ;

        if (budjet - finalSum >= 0) {
            let moneyLeft = budjet - finalSum;
            console.log(`Hey, you have a great garden with ${flowers} ${flowerType} and ${(moneyLeft).toFixed(2)} leva left.`);
        }
        else if (budjet - finalSum < 0) {
            let moneyNeeded = finalSum - budjet;
            console.log(`Not enough money, you need ${(moneyNeeded).toFixed(2)} leva more.`);
        }
    }
    else if (flowerType == 'Narcissus' && flowers < 120) {
        let finalSum = (flowers * 3) * 1.15;

        if (budjet - finalSum >= 0) {
            let moneyLeft = budjet - finalSum;
            console.log(`Hey, you have a great garden with ${flowers} ${flowerType} and ${(moneyLeft).toFixed(2)} leva left.`);
        }
        else if (budjet - finalSum < 0) {
            let moneyNeeded = finalSum - budjet;
            console.log(`Not enough money, you need ${(moneyNeeded).toFixed(2)} leva more.`);
        }
    }

    else if (flowerType == 'Gladiolus' && flowers >= 80) {
        let finalSum = (flowers * 2.50) ;

        if (budjet - finalSum >= 0) {
            let moneyLeft = budjet - finalSum;
            console.log(`Hey, you have a great garden with ${flowers} ${flowerType} and ${(moneyLeft).toFixed(2)} leva left.`);
        }
        else if (budjet - finalSum < 0) {
            let moneyNeeded = finalSum - budjet;
            console.log(`Not enough money, you need ${(moneyNeeded).toFixed(2)} leva more.`);
        }
    }
    else if (flowerType == 'Gladiolus' && flowers < 80) {
        let finalSum = (flowers * 2.50) * 1.20;

        if (budjet - finalSum >= 0) {
            let moneyLeft = budjet - finalSum;
            console.log(`Hey, you have a great garden with ${flowers} ${flowerType} and ${(moneyLeft).toFixed(2)} leva left.`);
        }
        else if (budjet - finalSum < 0) {
            let moneyNeeded = finalSum - budjet;
            console.log(`Not enough money, you need ${(moneyNeeded).toFixed(2)} leva more.`);
        }
    }
}
newHouse(["Narcissus",
"119",
"360"])


