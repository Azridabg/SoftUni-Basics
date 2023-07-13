function operationBetweenNumbers(input) {
   let num1 = Number(input[0]);
   let num2 = Number(input[1]);
   let operator = input[2];

   if (operator == '+') {
       let finalNumber = num1 + num2;
       if (finalNumber % 2 == 0) {
           console.log(` ${num1} ${operator} ${num2} = ${finalNumber} - even`);
       }
       else if (finalNumber % 2 === 1) {
           console.log(`${num1} ${operator} ${num2} = ${finalNumber} - odd`);
       }
   }

   else if (operator == '-') {
    let finalNumber = num1 - num2;
    if (finalNumber % 2 === 0) {
        console.log(` ${num1} ${operator} ${num2} = ${finalNumber} - even`);
    }
    else if (finalNumber % 2 == 1) {
        console.log(`${num1} ${operator} ${num2} = ${finalNumber} - odd`);
    }
}

if (operator == '*') {
    let finalNumber = num1 * num2;
    if (finalNumber % 2 == 0) {
        console.log(` ${num1} ${operator} ${num2} = ${finalNumber} - even`);
    }
    else if (finalNumber % 2 == 1) {
        console.log(`${num1} ${operator} ${num2} = ${finalNumber} - odd`);
    }
}

else if (operator == '/') {
    if (num2 != 0) {
    let finalNumber = num1 / num2;
    console.log(` ${num1} ${operator} ${num2} = ${(finalNumber).toFixed(2)}`);
    }
    else if (num2 == 0) {
        console.log(`Cannot divide ${num1} by zero`);
    }
}

else if (operator == '%') {
    if  (num2 != 0) {
    let finalNumber = num1 % num2;
    console.log(`${num1} ${operator} ${num2} = ${finalNumber}`);
}
    else if (num2 == 0) {
        console.log(`Cannot divide ${num1} by zero`);
    }
}
}
operationBetweenNumbers (["10",
"0",
"%"])






