function cristmasGifts (input) {
    let index =0;
    let adultsCount = 0;
    let kidsCount = 0;
    let pulloverCount = 0;
    let toysCount = 0;

    while (input[index] != 'Christmas') {
        if (Number(input[index]) <= 16) {
      kidsCount++
      toysCount++
        }
        else if (Number(input[index]) > 16) {
            adultsCount++
            pulloverCount++
        }
      index++
    }

    console.log(`Number of adults: ${adultsCount}`);
    console.log(`Number of kids: ${kidsCount}`);
    console.log(`Money for toys: ${toysCount * 5}`);
    console.log(`Money for sweaters: ${pulloverCount * 15}`);
}
cristmasGifts('16',
    '20',
    '46',
    '12',
    '8',
    '20',
    '49',
   'Christmas'
    )