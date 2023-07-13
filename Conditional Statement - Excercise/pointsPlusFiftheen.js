function pointsPlusFiftheen(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]) + 15;

    if (minutes >= 60) {
        hours += 1
        minutes -= 60
    }

    if (hours >= 24) {
        hours -= 24
    }
    if (minutes > 9) {
        console.log(` ${hours}:${minutes}`);
    }
    else {
        console.log(` ${hours}:0${minutes}`);
    }
}
pointsPlusFiftheen(["1", "46"])