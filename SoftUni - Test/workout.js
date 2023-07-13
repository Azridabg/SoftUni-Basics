function workout(input) {
    let index = 0;
    let workoutDays = Number(input[index]);
    index++
    let firstDayKilometers = Number(input[index]);
    index++
    let totalTraining = firstDayKilometers;
    for (let i = 1; i <= workoutDays; i++) {
        let x = ((Number(input[index]) / 100) * firstDayKilometers);
        firstDayKilometers += x
        index++
        totalTraining += firstDayKilometers
        x += firstDayKilometers
    }

    if (totalTraining > 1000) {
        console.log(`You've done a great job running ${Math.ceil(totalTraining - 1000)} more kilometers!`);
    }
    else {
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(1000 - totalTraining)} more kilometers`);
    }
}
workout([
    '5',
'30',
'10',
'15',
'20',
'5',
'12'

])