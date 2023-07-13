function hotelRoom(input) {
    let month = input[0];
    let nights = Number(input[1]);

    if (month == 'May' || month == 'October') {
        let studioPrice = nights * 50;
        let apartmentPrice = nights * 65;

        if (nights > 7 && nights <= 14) {
            studioPrice = studioPrice * 0.95
        }
        else if (nights > 14) {
            studioPrice = studioPrice * 0.7
            apartmentPrice = apartmentPrice * 0.9
        }

        console.log(`Apartment: ${(apartmentPrice).toFixed(2)} lv.`);
        console.log(`Studio: ${(studioPrice).toFixed(2)} lv.`);
    }
    else if (month == 'June' || month == 'September') {
        let studioPrice = nights * 75.20
        let apartmentPrice = nights * 68.70;

        if (nights > 14) {
            studioPrice = studioPrice * 0.8
            apartmentPrice = apartmentPrice * 0.9
        }

        console.log(`Apartment: ${(apartmentPrice).toFixed(2)} lv.`);
        console.log(`Studio: ${(studioPrice).toFixed(2)} lv.`);
    }
    else if (month == 'July' || month == 'August') {
        let studioPrice = nights * 76;
        let apartmentPrice = nights * 77;

        if (nights > 14) {
            apartmentPrice = apartmentPrice * 0.9
        }

        console.log(`Apartment: ${(apartmentPrice).toFixed(2)} lv.`);
        console.log(`Studio: ${(studioPrice).toFixed(2)} lv.`);
    }
}
hotelRoom(["August",
"20"])


