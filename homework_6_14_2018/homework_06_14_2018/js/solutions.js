console.log('JS is working'); 


///////////////// HOMEWORK ////////////////////

// 1. // 
// Function parameters are the names listed in the function's definition. // 

// 2. // 
// Function arguments are the real values passed to the function. // 

// 3. // 
// Console.log will display the parameter in the console. // 
// Return statement will stop executing the function and return the specified value. // 

////////////// COMMIT 001 ///////////


//// PALINDROME //// 

// Write a function checkPalindrome that accepts a single argument, a string.

// The function should return true (Boolean) if the string is a palindrome, false if it is not.

// Make sure your function will give the correct answer for words with capital letters.

// const checkPalindrome = (cut) => {
//   const lowerCase = cut.toLowerCase(); 
//   console.log(lowerCase);
//   const splitString = lowerCase.split('');
//   console.log(splitString);
//   const arr1 = splitString.reverse();
//   console.log(arr1);
//   const reversedString = arr1.join("");
//   console.log(reversedString);

//   if (cut === reversedString){
    
//     return true;
  
//   } else {
    
//     return false;
//   }


// }

// console.log(checkPalindrome("radar"));


//// DIGITAL SUM ////

// Write a function 'sumDigits' that accepts a number and returns the sum of its digits. // 

// const sumDigits = (num) => {

//     const digits = num.toString();
//     const stringArray = digits.split("");
//     const integerArray = parseInt(stringArray);
//     console.log(integerArray);
//     for (let i = 0; i <= integerArray.length; i++){

//     }
//     console.log(integerArray);
//     // console.log(stringArray); 
// };



// sumDigits(65);




// const value = 68,
//     sum = value
//         .toString()
//         .split('')
//         .map(Number)
//         .reduce(function (a, b) {
//             return a + b;
//         }, 0);

// console.log(sum);


//// PRIME NUMBERS ////

//  const checkPrimes = (num) => {
  
//   // find the square root of the number //
//     squareRoot = Math.sqrt(num) 
//   // loop through numbers starting at 2 // 
//     for (let i = 2; i <= squareRoot; i++){
//       if (num % i === 0) {
//         return true;
//       }
//     };

//       return false 
// };


// const printPrimes = (limit) => {
//   // For loop from 1 to limit // 
//   for (let i = 1; i <= limit; i++){
//       if(checkPrimes(i) === false){
//       console.log(i);
//     }
//   }
// };
   

// printPrimes(97);











