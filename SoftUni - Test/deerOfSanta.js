function deerOfSanta(input) {
   let missingDays =Number(input[0]);
   let leftFoodInKilos = Number(input[1]);
   let firstDeerNeededFoodForDay = Number(input[2]);
   let secondDeerNeededFoodForDay = Number(input[3]);
   let thirdDeerNeededFoodForDay = Number(input[4]);

   let firstDeerMenu = firstDeerNeededFoodForDay * missingDays;
   let secondDeerMenu = secondDeerNeededFoodForDay * missingDays;
   let thirdDeerMenu = thirdDeerNeededFoodForDay * missingDays;

   if (leftFoodInKilos >= (firstDeerMenu + secondDeerMenu + thirdDeerMenu)) {
       console.log(`${Math.floor(leftFoodInKilos - (firstDeerMenu + secondDeerMenu + thirdDeerMenu))} kilos of food left.`);
   }
   else if(leftFoodInKilos < (firstDeerMenu + secondDeerMenu + thirdDeerMenu)) {
       console.log(`${Math.ceil((firstDeerMenu + secondDeerMenu + thirdDeerMenu) - leftFoodInKilos)} more kilos of food are needed.`);
   }
}
deerOfSanta(
    [

    ]
)