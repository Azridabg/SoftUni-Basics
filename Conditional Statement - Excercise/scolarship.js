function scolarship(input) {
   let income = Number(input[0]);
   let averageMark = Number(input[1]);
   let minimalWorkIncome = Number(input[2]);
   let scolarshipPrise = minimalWorkIncome * 0.35;
   let excellentResultsScolarship = averageMark * 25;

   if (income < minimalWorkIncome && averageMark > 4.50) {
      console.log(`You get a Social scholarship ${Math.floor(scolarshipPrise)} BGN`);
      if (excellentResultsScolarship >= scolarshipPrise) {
         console.log(`You get a scholarship for excellent results ${Math.floor(excellentResultsScolarship)} BGN`);
      }
   }
   else if (averageMark >= 5.5) {
      console.log(`You get a scholarship for excellent results ${Math.floor(excellentResultsScolarship)} BGN`);
   }
   else {
      console.log('You cannot get a scholarship!');
   }
}
scolarship(["300.00",
   "5.65",
   "420.00"])

