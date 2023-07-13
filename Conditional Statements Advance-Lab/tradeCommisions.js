function tradeCommisions(input) {
 let city = input[0];
 let quantityOfSales = Number(input[1]);

 if (city === 'Sofia') {
     if (quantityOfSales >= 0 && quantityOfSales <= 500) {
         console.log((quantityOfSales * 1.05 - quantityOfSales).toFixed(2));
     }
     else if(quantityOfSales > 500 && quantityOfSales <= 1000){
         console.log((quantityOfSales * 1.07 - quantityOfSales).toFixed(2));
     }
     else if (quantityOfSales > 1000 && quantityOfSales <= 10000) {
         console.log((quantityOfSales * 1.08 - quantityOfSales).toFixed(2));
     }
     else if (quantityOfSales > 10000) {
         console.log((quantityOfSales * 1.12 - quantityOfSales).toFixed(2));
     }
     else {
         console.log('error');
     }
 }

 else if (city === 'Varna') {
    if (quantityOfSales >= 0 && quantityOfSales <= 500) {
        console.log((quantityOfSales * 1.045 - quantityOfSales).toFixed(2));
    }
    else if(quantityOfSales > 500 && quantityOfSales <= 1000){
        console.log((quantityOfSales * 1.075 - quantityOfSales).toFixed(2));
    }
    else if (quantityOfSales > 1000 && quantityOfSales <= 10000) {
        console.log((quantityOfSales * 1.1 - quantityOfSales).toFixed(2));
    }
    else if (quantityOfSales > 10000) {
        console.log((quantityOfSales * 1.13 - quantityOfSales).toFixed(2));
    }
    else {
        console.log('error');
    }
}

else if (city === 'Plovdiv') {
    if (quantityOfSales >= 0 && quantityOfSales <= 500) {
        console.log((quantityOfSales * 1.055 - quantityOfSales).toFixed(2));
    }
    else if(quantityOfSales > 500 && quantityOfSales <= 1000){
        console.log((quantityOfSales * 1.08 - quantityOfSales).toFixed(2));
    }
    else if (quantityOfSales > 1000 && quantityOfSales <= 10000) {
        console.log((quantityOfSales * 1.12 - quantityOfSales).toFixed(2));
    }
    else if (quantityOfSales > 10000) {
        console.log((quantityOfSales * 1.145 - quantityOfSales).toFixed(2));
    }
    else {
        console.log('error');
    }
}
else {
    console.log('error');
}
}
tradeCommisions(["Kaspichan",
"-50"])


