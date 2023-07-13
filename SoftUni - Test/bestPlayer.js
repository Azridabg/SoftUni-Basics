function bestPlayer(input) {
    let index = 0;
    let player = input[index];
    index++
    let goals = Number(input[index]);
    index++
    while (player != 'END') {
        let nextPlayer = input[index];
        index++
        if (nextPlayer == 'END') {
            break;
        }
        let nextPlayerGoals = Number(input[index]);
        index++
        if (goals >= 10) {
            break;
        }

        if (goals < nextPlayerGoals) {
            goals = nextPlayerGoals
            player = nextPlayer
        }
    }
    if (goals >= 3) {
        console.log(`${player} is the best player!`);
        console.log(`He has scored ${goals} goals and made a hat-trick !!!`);
    }
    else if (goals < 3) {
        console.log(`${player} is the best player!`);
        console.log(`He has scored ${goals} goals.`);
    }
}
bestPlayer([
    'Rooney',
'1',
'Junior',
'2',
'Paolinio',
'2',
'END'


])