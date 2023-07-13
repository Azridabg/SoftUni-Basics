function leapYears (input) {
   let leapYear = Number(input[0]);
   let year = Number(input[1]);

   for (let i = leapYear; i <= year; i++) {
           if (i % 4 == 0) {
               console.log(i);
           }
   }
}
leapYears(["2000", "2012"])

