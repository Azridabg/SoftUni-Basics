function salary(input) {
   let index = 0;
   let openBrowsers =Number(input[index++]);
   let monthWage = Number(input[index++]);
   for(i=index; i<input.length;i++) {
     if(input[i] == 'Facebook') {
   monthWage -= 150;
     }
     else if (input[i] == 'Instagram') {
         monthWage-=100;
     }
     else if (input[i] == 'Reddit') {
         monthWage-=50;
     }
   }

   if(monthWage > 0) {
       console.log(monthWage);
   }
   else if (monthWage <= 0) {
   console.log('You have lost your salary.');
   }
}
salary(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"])

