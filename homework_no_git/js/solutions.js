console.log("script works");


// // What is the difference between a parameter and an argument?
// a parameter is a variable, an argument is the data 
// you pass through that parameter. 
// a Parameter is the variable being declared by a function, 
// where an argument is the actual value of the variable.

// // Within a function, what is the difference between 
// // return and console.log?
// console log prints the language. return actually 
// returns values from a function.

// Palindrome

// const checkPalindrome = (str) => {
//   const splitString = str.split("");
//   console.log(splitString);
//   const reverseArray = splitString.reverse();
//   console.log(reverseArray);
//   const joinArray = reverseArray.join("");
//       if (str == joinArray){
//         return true;
//       } else if (str.toUpperCase() == joinArray){
//         return true;
//       }else 
//       return false;
// } 

// console.log(checkPalindrome("Radar".toUpperCase()));
// console.log(checkPalindrome("Borscht"));

// Write a function sumDigits that 
// accepts a number and returns the sum of its digits.

// finished
// const sumDigits = (num) => {
//   // turn number into string place into new variable
//       const number = num.toString();
//       // console.log(number);
//   // split the string into array
//   // turn string back in to number
//       const str = number.split("").map(Number);
//       // console.log(str); //good this far
//       //add the array together to find sum
//       let sum = 0;
//         for (let i = 0; i < str.length; i++){
//           sum += str[i]
//               // console.log(sum);
//         }
//         return sum;
// }
// console.log(sumDigits(82));
// console.log(sumDigits(42));
// console.log(sumDigits(69));

// Pythagoras

// Write a function calculateSide that takes two arguments: 
// sideA and sideB, and returns the solution for sideC using 
// the Pythagorean theorem.














// Prime Numbers

// const checkPrimes = (num) => {

//     squareRoot = Math.sqrt(num)
 
//     for(let i = 2; i <= squareRoot; i++){

//       // console.log(i);

//     if (num % i === 0){

//             return true
//         };
//       };
//       return false
// };
//   // check if num is evenly divisable ny each number
//   // if true return true
//  // if false return false

// // console.log(checkPrimes(81));


// const printPrimes = (limit) => {
//   // for loop
//   for(let i = 1; i <= limit; i++){

//     if(checkPrimes(i) == false){
//      console.log(i)
//       } else {
//         //do nodda
//       }
//   }
// }  

// printPrimes(97)







































