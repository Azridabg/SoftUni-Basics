function journey(input) {
    let budjet = Number(input[0]);
    let season = input[1];

    if (budjet <= 100) {
        let destination = 'Bulgaria';

        if (season == 'summer') {
            let kindOfJourney = 'Camp';
            let finalSum = budjet * 0.3;

            console.log(`Somewhere in ${destination} `);
      console.log(`${kindOfJourney} - ${(finalSum).toFixed(2)}`);
        }
        else if (season == 'winter') {
            let kindOfJourney = 'Hotel';
            let finalSum = budjet * 0.7;

            console.log(`Somewhere in ${destination} `);
      console.log(`${kindOfJourney} - ${(finalSum).toFixed(2)}`);
        }
    }

    else if (budjet > 100 && budjet <= 1000) {
             let destination = 'Balkans';

             if (season == 'summer') {
                 let kindOfJourney = 'Camp';
                 let finalSum = budjet * 0.4;

                 console.log(`Somewhere in ${destination} `);
      console.log(`${kindOfJourney} - ${(finalSum).toFixed(2)}`);
             }
             else if (season = 'winter') {
                 let kindOfJourney = 'Hotel';
                 let finalSum = budjet * 0.8;

                 console.log(`Somewhere in ${destination} `);
      console.log(`${kindOfJourney} - ${(finalSum).toFixed(2)}`);
             }
    }
    else if (budjet > 1000) {
   let destination = 'Europe';

   if (season == 'summer' || season == 'winter') {
      let kindOfJourney = 'Hotel';
      let finalSum = budjet * 0.9;

      console.log(`Somewhere in ${destination} `);
      console.log(`${kindOfJourney} - ${(finalSum).toFixed(2)}`);

   }
    }
}
journey(["312", "summer"])