function tournamentOfCristmas(input) {
    let index=0;
    let daysOfTournament = Number(input[index]);
    index++
   let charityMoney =0;
   let game =input[index];
   let  daysPassed =0;
   let wonDays =0;
    while(daysOfTournament > daysPassed) {
        let dayEarnings = 0;
        let wonGame =0;
        let lostGame =0;
    while(game != 'win' || game != 'lose') {
        index++
        game = input[index]
        if(game== 'Finish') {
            break;
        }
        if (game == 'win') {
            wonGame++
            dayEarnings+=20
        }
        else if (game == 'lose') {
       lostGame++
        }
        }
        if (wonGame > lostGame) {
            wonDays++
            dayEarnings += dayEarnings * 10 / 100
        }
        daysPassed++
        charityMoney+= dayEarnings

    }

    if (wonDays > (daysPassed - wonDays)) {
        charityMoney += (charityMoney * 20 / 100)

        console.log(`You won the tournament! Total raised money: ${(charityMoney).toFixed(2)}`);
    }
    else if(wonDays < (daysPassed - wonDays)) { console.log(`You lost the tournament! Total raised money: ${(charityMoney).toFixed(2)}`);
}
    }
tournamentOfCristmas([
    "3",
    "darts",
    "lose",
    "handball",
    "lose",
    "judo",
    "win",
    "Finish",
    "snooker",
    "lose",
    "swimming",
    "lose",
    "squash",
    "lose",
    "table tennis",
    "win",
    "Finish",
    "volleyball",
    "win",
    "basketball",
    "win",
    "Finish"
])

