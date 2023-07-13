function histogram(input) {
    let index = 0;
    let n = Number(input[index]);
    index++
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (i = index; i <= n; i++) {
        if (input[i] < 200) {
            p1++
        }
        else if (input[i] >= 200 && input[i] <= 399) {
            p2++
        }
        else if (input[i] >= 400 && input[i] <= 599) {
            p3++
        }
        else if (input[i] >= 600 && input[i] <= 799) {
            p4++
        }
        else if (input[i] >= 800 && input[i] <= 1000) {
            p5++
        }
    }
    let pOnePercentage = p1 / n * 100;
    let pTwoPercentage = p2 / n * 100;
    let pThreePercentage = p3 / n * 100;
    let pFourPercentage = p4 / n * 100;
    let pFivePercentage = p5 / n * 100;

    console.log(`${pOnePercentage.toFixed(2)}%`);
    console.log(`${pTwoPercentage.toFixed(2)}%`);
    console.log(`${pThreePercentage.toFixed(2)}%`);
    console.log(`${pFourPercentage.toFixed(2)}%`);
    console.log(`${pFivePercentage.toFixed(2)}%`);
}
histogram(["3", "1", "2", "999"])
