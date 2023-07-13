function sumSeconds(input) {
    let participantA = Number(input[0]);
    let participantB = Number(input[1]);
    let participantC = Number(input[2]);
    let totalTime = participantA + participantB + participantC;

    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    if (seconds < 10) {
        console.log(` ${minutes}:0${seconds}`);
    }
    else {
        console.log(`${minutes}:${seconds}`);
    }
}
sumSeconds(["35", "45", "44"]);