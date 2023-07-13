function uniquePinCodes(input) {
    let index = 0;
    let maxFirstNumber = Number(input[index]);
    index++
    let maxSecondNumber = Number(input[index]);
    index++
    let maxThirdNumber = Number(input[index]);
    let i = 0;
    let o = 0;
    let p = 0;
    for (i = 1; i <= maxFirstNumber; i++) {
        if (i % 2 == 0) {
            for (o = 2; o <= maxSecondNumber; o++) {
                if (o > 7) {
                    break;
                }
                if (o != 4 && o != 6) {
                    for (p = 1; p <= maxThirdNumber; p++) {
                        if (p % 2 == 0) {
                            console.log(i, o, p);
                        }
                    }
                }
            }
        }
    }
}
uniquePinCodes(['3', '5', '5'])