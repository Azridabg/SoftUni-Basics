function finalCompetition (input) {
   let dancers = Number(input[0]);
   let points = Number(input[1]);
   let season = input[2];
   let country = input[3];
   let sum = 0;
   if (country == 'Bulgaria') {
   sum = (points * dancers)

   if (season == 'summer') {
       sum = sum  * 0.95
   }
   else if (season == 'winter') {
       sum *= 0.92
   }

   let charityMoney = sum *0.75;

   console.log(`Charity - ${(charityMoney).toFixed(2)}`);
   console.log(`Money per dancer - ${((sum *0.25) / dancers).toFixed(2)}`);
   }

   else if (country == 'Abroad') {
       sum = (points * dancers) + ((points * dancers) * 0.50)

       if (season == 'summer') {
           sum = sum * 0.90
       }
       else if (season == 'winter') {
           sum *= 0.85
       }

       let charityMoney = sum * 0.75;

       console.log(`Charity - ${(charityMoney).toFixed(2)}`);
       console.log(`Money per dancer - ${((sum *0.25) / dancers).toFixed(2)}`);
   }
}
finalCompetition()