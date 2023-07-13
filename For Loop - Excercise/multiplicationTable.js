function multiplicationTable (input) {
   let randomNumber = Number(input[0]);

   for (let i = 1; i<=10;i++) {
      console.log(`${i} * ${randomNumber} = ${i * randomNumber}`);
   }
}
multiplicationTable("5")