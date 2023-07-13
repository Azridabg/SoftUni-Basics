function skiTrip(input) {
    let days = Number(input[0]);

    let nights = days - 1;
    let room = input[1];
    let rating = input[2];
    let roomForOnePerson = 18;
    let apartment = 25;
    let presidentApartment = 35;

    if (room == 'room for one person' && nights < 10) {
        if (rating == 'positive') {
            console.log(((roomForOnePerson * nights) * 1.25).toFixed(2));
        }
        else if (rating == 'negative') {
            console.log(((roomForOnePerson * nights) * 0.9).toFixed(2));
        }
    }
    else if (room == 'room for one person' && nights >= 10 && nights <= 15) {
        if (rating == 'positive') {
            console.log(((roomForOnePerson * nights) * 1.25).toFixed(2));
        }
        else if (rating == 'negative') {
            console.log(((roomForOnePerson * nights) * 0.9).toFixed(2));
        }
    }
    else if (room == 'room for one person' && nights > 15) {
        if (rating == 'positive') {
            console.log(((roomForOnePerson * nights) * 1.25).toFixed(2));
        }
        else if (rating == 'negative') {
            console.log(((roomForOnePerson * nights) * 0.9).toFixed(2));
        }
    }

    if (room == 'apartment' && nights < 10) {
        apartment = (apartment * nights) * 0.7;
        if (rating == 'positive') {
            console.log((apartment * 1.25).toFixed(2));
        }
        else if (rating == 'negative') {
            console.log((apartment * 0.9).toFixed(2));
        }
    }
    else if (room == 'apartment' && nights >= 10 && nights <= 15) {
        apartment = (apartment * nights) * 0.65;
        if (rating == 'positive') {
            console.log((apartment * 1.25).toFixed(2));
        }
        else if (rating == 'negative') {
            console.log((apartment * 0.9).toFixed(2));
        }
    }
    else if (room == 'apartment' && nights > 15) {
        apartment = (apartment * nights) * 0.5;
        if (rating == 'positive') {
            console.log((apartment * 1.25).toFixed(2));
        }
        else if (rating == 'negative') {
            console.log((apartment * 0.9).toFixed(2));
        }
    }

    else if (room == 'president apartment' && nights < 10) {
        presidentApartment = (presidentApartment * nights) * 0.9;
        if (rating == 'positive') {
            console.log((presidentApartment * 1.25).toFixed(2));
        }
        else if (rating == 'negative') {
            console.log((presidentApartment * 0.9).toFixed(2));
        }
    }
    else if (room == 'president apartment' && nights >= 10 && nights <= 15) {
        presidentApartment = (presidentApartment * nights) * 0.85;
        if (rating == 'positive') {
            console.log((presidentApartment * 1.25).toFixed(2));
        }
        else if (rating == 'negative') {
            console.log((presidentApartment * 0.9).toFixed(2));
        }
    }
    else if (room == 'president apartment' && nights > 15) {
        presidentApartment = (presidentApartment * nights) * 0.8;
        if (rating == 'positive') {
            console.log((presidentApartment * 1.25).toFixed(2));
        }
        else if (rating == 'negative') {
            console.log((presidentApartment * 0.9).toFixed(2));
        }
    }

}
skiTrip(["30",
"president apartment",
"negative"])

