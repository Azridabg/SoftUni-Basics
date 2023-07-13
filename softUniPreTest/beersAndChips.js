function beersAndChips(input) {
   let fansName =input[0];
   let budjet = Number(input[1]);
   let beerBottles = Number(input[2]);
   let chipsPackages = Number(input[3]);

   let beerPrice = 1.20 * beerBottles;
   let chipsPrice = Math.ceil(chipsPackages *(beerPrice * 0.45));
   let finalPayment = beerPrice + chipsPrice;
   
   if (budjet - finalPayment >= 0) {
       console.log(`${fansName} bought a snack and has ${(budjet - finalPayment).toFixed(2)} leva left.`);
   }
   else if (budjet - finalPayment < 0) {
       console.log(`${fansName} needs ${(finalPayment - budjet).toFixed(2)} more leva!`);
   }
}
beersAndChips(['George',
    '10',
    '2',
    '3'
    ])