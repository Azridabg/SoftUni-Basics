function footballSouveniers(input) {
   let country = input[0];
   let souvenierType = input[1];
   let numberOfSouveniers = Number(input[2]);
   let finalSum = 0;

   if(country == 'Argentina') {
       if (souvenierType =='flags') {
       finalSum = numberOfSouveniers * 3.25;
       console.log(`Pepi bought ${numberOfSouveniers} ${souvenierType} of ${country} for ${finalSum.toFixed(2)} lv.`);
       }
       else if (souvenierType == 'caps') {
            finalSum =numberOfSouveniers *7.20;
            console.log(`Pepi bought ${numberOfSouveniers} ${souvenierType} of ${country} for ${finalSum.toFixed(2)} lv.`);
       }
       else if (souvenierType == 'posters') {
            finalSum = numberOfSouveniers * 5.10 ;
            console.log(`Pepi bought ${numberOfSouveniers} ${souvenierType} of ${country} for ${finalSum.toFixed(2)} lv.`);
       }
       else if (souvenierType == 'stickers') {
           finalSum = numberOfSouveniers * 1.25;
           console.log(`Pepi bought ${numberOfSouveniers} ${souvenierType} of ${country} for ${finalSum.toFixed(2)} lv.`);
       }
       else {
           console.log('Invalid stock!');
       }
   }

   else if(country == 'Brazil') {
    if (souvenierType =='flags') {
    finalSum = numberOfSouveniers * 4.20;
    console.log(`Pepi bought ${numberOfSouveniers} ${souvenierType} of ${country} for ${finalSum.toFixed(2)} lv.`);
    }
    else if (souvenierType == 'caps') {
         finalSum =numberOfSouveniers *8.50;
         console.log(`Pepi bought ${numberOfSouveniers} ${souvenierType} of ${country} for ${finalSum.toFixed(2)} lv.`);
    }
    else if (souvenierType == 'posters') {
         finalSum = numberOfSouveniers * 5.35 ;
         console.log(`Pepi bought ${numberOfSouveniers} ${souvenierType} of ${country} for ${finalSum.toFixed(2)} lv.`);
    }
    else if (souvenierType == 'stickers') {
        finalSum = numberOfSouveniers * 1.20;
        console.log(`Pepi bought ${numberOfSouveniers} ${souvenierType} of ${country} for ${finalSum.toFixed(2)} lv.`);
    }
    else {
        console.log('Invalid stock!');
    }
}

else if(country == 'Croatia') {
    if (souvenierType =='flags') {
    finalSum = numberOfSouveniers * 2.75;
    console.log(`Pepi bought ${numberOfSouveniers} ${souvenierType} of ${country} for ${finalSum.toFixed(2)} lv.`);
    }
    else if (souvenierType == 'caps') {
         finalSum =numberOfSouveniers *6.90;
         console.log(`Pepi bought ${numberOfSouveniers} ${souvenierType} of ${country} for ${finalSum.toFixed(2)} lv.`);
    }
    else if (souvenierType == 'posters') {
         finalSum = numberOfSouveniers * 4.95 ;
         console.log(`Pepi bought ${numberOfSouveniers} ${souvenierType} of ${country} for ${finalSum.toFixed(2)} lv.`);
    }
    else if (souvenierType == 'stickers') {
        finalSum = numberOfSouveniers * 1.10;
        console.log(`Pepi bought ${numberOfSouveniers} ${souvenierType} of ${country} for ${finalSum.toFixed(2)} lv.`);
    }
    else {
        console.log('Invalid stock!');
    }   
}

else if(country == 'Denmark') {
    if (souvenierType =='flags') {
    finalSum = numberOfSouveniers * 3.10;
    console.log(`Pepi bought ${numberOfSouveniers} ${souvenierType} of ${country} for ${finalSum.toFixed(2)} lv.`);
    }
    else if (souvenierType == 'caps') {
         finalSum =numberOfSouveniers *6.50;
         console.log(`Pepi bought ${numberOfSouveniers} ${souvenierType} of ${country} for ${finalSum.toFixed(2)} lv.`);
    }
    else if (souvenierType == 'posters') {
         finalSum = numberOfSouveniers * 4.80 ;
         console.log(`Pepi bought ${numberOfSouveniers} ${souvenierType} of ${country} for ${finalSum.toFixed(2)} lv.`);
    }
    else if (souvenierType == 'stickers') {
        finalSum = numberOfSouveniers * 0.90;
        console.log(`Pepi bought ${numberOfSouveniers} ${souvenierType} of ${country} for ${finalSum.toFixed(2)} lv.`);
    }
    else {
        console.log('Invalid stock!');
    }  
}

else {
    console.log('Invalid country!');
}
}
footballSouveniers(['Brazil', 'stickers' ,'5'])