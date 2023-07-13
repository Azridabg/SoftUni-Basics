function miningRig (input) {
   let videoCardPrice = Number(input[0]);
   let adapter = Number(input[1]);
   let currentPriceForDay = Number(input[2]);
   let earningsFromACardForDay = Number(input[3]);
   let moneyForVideoCards = 13* videoCardPrice;
   let moneyForAdapter = 13* adapter;
   let moneyGiven = 1000 + moneyForAdapter + moneyForVideoCards ;
   let earningsForADay = 13*(earningsFromACardForDay - currentPriceForDay);
   let daysTillPayOff = Math.ceil(moneyGiven/ earningsForADay);

   console.log(moneyGiven);
   console.log(daysTillPayOff);
}
miningRig(['800',
'10',
'0.32',
'6.4'])
