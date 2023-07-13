function demo(input) {
  let holiday = Number(input[0]);
  let puzzles = Number(input[1]);
  let speakingDolls = Number(input[2]);
  let bears = Number(input[3]);
  let minnions = Number(input[4]);
  let lorries = Number(input[5]);

  let puzzlesPrice =  puzzles * 2.60;
  let speakingDollsPrice = speakingDolls * 3;
  let bearsPrice = bears * 4.10;
  let minnionsPrice = minnions * 8.20;
  let lorriesPrice = lorries * 2;

  let wholePrice = puzzlesPrice + speakingDollsPrice + bearsPrice + minnionsPrice + lorriesPrice;
  let allPurchases = puzzles + speakingDolls + bears + minnions + lorries; 

  if (allPurchases >= 50){
  wholePrice = wholePrice * 0.75;
  }
   wholePrice = wholePrice * 0.90;

  if (wholePrice >= holiday) {
    console.log(`Yes! ${(wholePrice - holiday).toFixed(2)} lv left.`);
  }
  else {
    console.log(`Not enough money! ${Math.abs(wholePrice - holiday).toFixed(2)} lv needed.`);
  }
}
demo(["320", "8", "2", "5", "5", "1"]);