function numbersDevidedByNine (input) {
  let firstNumber = Number(input[0]);
  let secondNumber = Number(input[1]);
  let n1 = firstNumber + "";
  let n2 = secondNumber + "";
  let sum = 0;
  // let allNumbers = "";

  for (i = n1; i<=n2; i++) {
     if (i % 9 == 0) {
     sum += i
    //  allNumbers+= i + " "
     }
  }
  console.log(`The sum: ${sum}`);
  // console.log(allNumbers);
  for (z = n1; z<=n2; z++) {
      if(z % 9 ==0) {
          console.log(z);
      }
  }
}
numbersDevidedByNine((["100", "200"]))