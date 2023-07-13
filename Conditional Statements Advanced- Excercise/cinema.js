function cinema (input) {
let typeOfProjections = input[0];
let roll = Number(input[1]);
let column = Number(input[2]);
let allSeats = roll* column;
let income = 0;
if (typeOfProjections == 'Premiere') {
console.log((allSeats * 12).toFixed(2));
}
else if (typeOfProjections == 'Normal') {
 console.log(allSeats * 7.50);
}
else if (typeOfProjections == 'Discount') {
console.log(allSeats * 5);
}
}
cinema()