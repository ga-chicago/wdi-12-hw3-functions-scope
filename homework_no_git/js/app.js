
// Section 1
// 1. Parameter - Variable defined in the function's declaration when the function is defined.
// // Argument - Actual values passed into the function when the function is called.

// 2. return - Allows us to "hand back" a value to the line where we called the function.
// // console.log - Simply calls the function, and lets us know whether it's working or not.


// Section 2
const checkPalindrome = (string) => {
  const lowerCaseString = string.toLowerCase();
  const arraySplit = lowerCaseString.split("");
  console.log(arraySplit);
  const reversedArray = arraySplit.reverse();
  console.log(reversedArray);
  console.log(reversedArray.join(""));
  const reversedString = reversedArray.join("");
  if(string === reversedString) {
    return true;
  } else {
    return false;
  }
}

 console.log(checkPalindrome("radar"));
 console.log(checkPalindrome("Borscht"));

// Section 3
 const sumDigits = (num) => {
    const digits = num.toString().split('');
    // console.log(digits);
    let numbers = [];
    for (let i = 0; i < digits.length; i++){
      numbers[i] = parseInt(digits[i]); //each time changing i, you want digits and numbers to be in the same element
    }
    sumTotal = 0;
    // console.log(numbers);
    for(let i = 0; i < numbers.length; i++){ //see each value of numbers
      sumTotal = sumTotal + numbers[i];
    }
    return sumTotal;
 }

console.log(sumDigits(42));


// Section 4
const calculateSide = (sideA, SideB) => {
// find hypotenuse - a2 + b2 = c2
// use Math.hypot([x[, y[, …]]]) or Math.sqrt(c)?
// }
 

console.log(calculateSide(8, 6));
=> 10


// Section 5
const sumArray = (num) => {
  for(let sum = 0; i < 6; i++){
    // add numbers in array like in sumDigits
    sumTotal = sumTotal + sum[i]; //?
  }
}


console.log(sumArray([1, 2, 3, 4, 5, 6]));
// => 21


// Section 6
// 1. Went over with Anthony
const checkPrime = (num) => {
  // Find the square root of num
  squareRoot = Math.sqrt(num);
  // loop through number starting at 2
  for(let i = 2; i <= squareRoot; i++){
    if (num % i === 0){
      return true
      }
    } 
    return false
  }
console.log(checkPrime(97));

// // 2.
const printPrimes = (limit) => {
  // for loop from 2 to limit
  for(let i = 1; i <= limit; i++){
  // If statement is prime, print it
  if (checkPrime(i) === false) {
    console.log(i);
    } else {
      // Do nothing
    }
  }
}
printPrimes(97);


// Section 7
const insertDash = (num) => {
  // Turn numbers into a string
  // Insert dashes b/t consecutive odd numbers
  // ONLY b/t numbers
}

 console.log(insertDash(454793));







