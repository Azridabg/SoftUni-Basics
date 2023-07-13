function goldMines(input) {
    let index=0;
    let locations = Number(input[index]);
    index++
    let currentGold =0;
    let l =0;
    let expectedGold=0;
    for (let i = 1; i<= locations;i++) {
          expectedGold = Number(input[index++])
        for(let k = 1; k <= Number(input[index++]); k++) {
            currentGold += Number(input[index++])
            l++
        }
    }
    if (expectedGold <= (currentGold/l)) {
        console.log(`Good job! Average gold per day: ${currentGold/l}.`);
    }
    else if (expectedGold > (currentGold/l) ) {
        console.log(`You need ${Math.abs(expectedGold - currentGold)} gold.`);
    }
}
goldMines(['2' ,'10' ,'3' ,'10' ,'10' ,'11' ,'20' ,'2' ,'20' ,'10'])