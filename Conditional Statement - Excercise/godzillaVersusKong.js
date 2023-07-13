function godzillaVesrsusKong(input) {
    let filmBudget = Number(input[0]);
    let statists = Number(input[1]);
    let budgetForClothes = Number(input[2]);
    let budgetForClothesForAllStatists = statists * budgetForClothes;
    let decoration = filmBudget * 0.1;

    if (statists > 150) {
        budgetForClothesForAllStatists = budgetForClothesForAllStatists * 0.9;
    }

    let neededMoney = decoration + budgetForClothesForAllStatists;

    if (neededMoney <= filmBudget) {
        console.log(`Action!
         Wingard starts filming with ${(filmBudget - neededMoney).toFixed(2)} leva left.`);
    }   
    else {  
        console.log(`Not enough money!
         Wingard needs ${(Math.abs(neededMoney - filmBudget)).toFixed(2)} leva more.`);
    }
}
godzillaVesrsusKong(["9587.88", "222", "55.68"])

