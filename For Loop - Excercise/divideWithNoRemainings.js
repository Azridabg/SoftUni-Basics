function divideWithNoRemainings(input) {
    let index = 0;
    let n = Number(input[index]);
    index++
    let devidedByTwo = 0;
    let devidedByThree = 0;
    let devidedByFour = 0;
    for (let i = index; i <= n; i++) {
        if (Number(input[i]) % 2 == 0) {
            devidedByTwo++
        }
         if (Number(input[i]) % 3 == 0) {
            devidedByThree++
        }
         if (Number(input[i]) % 4 == 0) {
            devidedByFour++
        }
    }

    let percentageOfAllNumbersDevidedByTwo = devidedByTwo / n * 100;
    let percentageOfAllNumbersDevidedByThree = devidedByThree / n * 100;
    let percentageOfAllNumbersDevidedByFour = devidedByFour / n * 100;

    console.log(`${percentageOfAllNumbersDevidedByTwo.toFixed(2)}%`);
    console.log(`${percentageOfAllNumbersDevidedByThree.toFixed(2)}%`);
    console.log(`${percentageOfAllNumbersDevidedByFour.toFixed(2)}%`);
}
divideWithNoRemainings(["10", "680", "2", "600", "200", "800", "799", "199", "46", "128", "65"])
