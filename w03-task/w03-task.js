/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(num1, num2){
   return num1 + num2;
};
function addNumber(){
   const firstNum = parseInt(document.querySelector("#add1").value);
   console.log("FIRST NUMBER:", firstNum)
   const secondNum = parseInt(document.querySelector("#add2").value);
   console.log("SECOND NUMBER:", secondNum)
   const sum = add(firstNum, secondNum);
   console.log("SUM:", sum)
   document.querySelector("#sum").value = sum;
};
document.querySelector("#addNumbers").addEventListener('click', addNumber);

/* Function Expression - Subtract Numbers */
const subtractNumbers = function(){
   const minuend = parseInt(document.querySelector("#minuend").value);
   console.log("MINUEND:", minuend)
   const subtrahend = parseInt(document.querySelector("#subtrahend").value);
   console.log("SUBSTRAHEND:", subtrahend)

   const difference = subtract(minuend, subtrahend);
   console.log("DIFFERENCE:", difference)
   document.querySelector("#difference").value = difference;
};
document.querySelector("#subtractNumbers").addEventListener('click', subtractNumbers);

// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
/* Arrow Function - Multiply Numbers */
const multiply = (factor1, factor2) => {
   return factor1 * factor2;
};  
const multiplyNumbers = () => {
   const firstFactor = parseInt(document.querySelector("#factor1").value);
   console.log("FIRST FACTOR:", firstFactor)
   const secondFactor = parseInt(document.querySelector("#factor2").value);
   console.log("SECOND FACTOR:", secondFactor)

   const product = multiply(firstFactor, secondFactor);
   console.log("PRODUCT:", product)
   document.querySelector("#product").value = product;
};
document.querySelector("#multiplyNumbers").addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */

const divide = (num1, num2) => {
   return num1 / num2;
};

const divideNumbers = () => {
   const dividend = parseInt(document.querySelector("#dividend").value);
   console.log("DIVIDEND:", dividend)
   const divisor = parseInt(document.querySelector("#divisor").value);
   console.log("DIVISOR:", divisor)

   const quotient = divide(dividend, divisor);
   console.log("QUOTIENT:", quotient)
   document.querySelector("#quotient").value = quotient;
};
document.querySelector("#divideNumbers").addEventListener('click', divideNumbers);

/* Decision Structure */


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
const array = Array.from({length: 25}, (_, i) => i + 1);
console.log(array);
document.querySelector("#array").textContent = array;

/* Output Odds Only Array */
function findOdds(value) {
   return value %2 != 0;
}
const oddFiltered = array.filter(findOdds);
console.log(oddFiltered)

document.querySelector("#odds").textContent = oddFiltered

/* Output Evens Only Array */
function findEvens(value) {
   return value %2 == 0;
}
const evenFiltered = array.filter(findEvens);
console.log(evenFiltered)
document.querySelector("#evens").textContent = evenFiltered

/* Output Sum of Org. Array */
function getSumOfArray(array) {
   return array.reduce((acumulator, currentValue) => acumulator + currentValue);
}
const sumOfArray = getSumOfArray(array);
console.log(sumOfArray);
document.querySelector("#sumOfArray").textContent = sumOfArray;

/* Output Multiplied by 2 Array */
function multiplyArrayByTwo(array) {
   return array.map(num => num * 2);
}
const multiplied = multiplyArrayByTwo(array);
console.log(multiplied)
document.querySelector("#multiplied").textContent = multiplied;

/* Output Sum of Multiplied by 2 Array */
function sumMultipliedArray(array) {
   return multiplied.reduce((acumulator, currentValue) => acumulator + currentValue);
}
const sumOfMultiplied = sumMultipliedArray(array);
console.log(sumOfMultiplied)
document.querySelector("#sumOfMultiplied").textContent = sumOfMultiplied;