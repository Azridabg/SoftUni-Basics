function cleverLilly(input) {
    let lillysAge = Number(input[0]);
    let laundrysPrice = Number(input[1]);
    let toyPrice = Number(input[2]);
    let toys = 0;
    let money = 0;
    let currentMoney=10;
    let sumOfToys = 0;
    for (i = 1; i <= lillysAge; i++) {
        if (i % 2 != 0) {
            toys += 1
        }
        else if (i % 2 == 0) {
            money += currentMoney
            money -= 1
            currentMoney +=10;
        }
    }
    sumOfToys = toys * toyPrice;
    let allMoney = sumOfToys + money;
    if (allMoney >= laundrysPrice) {
        console.log(`Yes! ${(allMoney - laundrysPrice).toFixed(2)}`);
    }
    else if (allMoney < laundrysPrice) {
        console.log(`No! ${Math.abs(laundrysPrice - allMoney).toFixed(2)}`);
    }
}
cleverLilly(["21", "1570.98", "3"])