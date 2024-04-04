//Simple calculator using JS and Switch case

//we need this library module to accept user input
const prompt = require('prompt-sync')();

let results;
//accept the operator input
const operator= prompt(' enter operator (either +, -, *, or /):');

//accept an operand input
const num1= parseFloat(prompt('Enter the first number: '));
const num2= parseFloat(prompt('Enter the second number: '));

switch(operator) {
    //Formular for addition
    case '+': 
    results = num1 + num2;
    console.log(`${num1} + ${num2}=${results}`);
    break;
    //Formular for subtraction
    case '-': 
    results = num1 - num2;
    console.log(`${num1} - num2=${results}`);
   break;
   case '*': 
   //Formular for multiplication
   results = num1 * num2;
   console.log(`${num1} * ${num2}=${results}`);
break;

case '/': 
   //Formular for division 
   results = num1 / num2;
   console.log(`${num1} / ${num2}=${results}`);
break; 

case '^': 
   //Formular for exponentiation
   results = num1 ** num2;
   console.log(`${num1} ** ${num2}=${results}`);
break;
}


