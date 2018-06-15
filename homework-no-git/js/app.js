console.log("JavaScript is working!");

// 1. There is no "question 1"
// 
// 2. What is the difference between a parameter and an argument?
    // A parameter is what your code is constricted by
    // An argument is something that defines your code
    // 
// 3. Within a function, what is the difference between return and console.log?
   // "Return" will end the loop or function, so the code below will not be executed.
   // Console.log will display the parameter in the  browser console.
   // 

  // Write a function checkPalindrome that accepts a single argument, a string. The function should return true (Boolean) if the string is a palindrome, false if it is not. Make sure your function will give the correct answer for words with capital letters.
//   const checkPalindrome = (pdm) => {
//     // console.log(pdm);
//     const lower = pdm.toLowerCase()
//     console.log(lower);
//     const array = lower.split("");
//     // console.log(array);
//     const rev = array.reverse();
//     const back = (rev.join(""));
//     console.log(back);
//     if (back === lower){
//       console.log(true);
//     }else {
//       console.log( false);

//     }
//   }
//   checkPalindrome("Radar");
// //  //=> true
//   checkPalindrome("Borscht");
// // //=> false
// 
// 
//Write a function sumDigits that accepts a number and returns the sum of its digits.
const sumDigits = (number) =>{
  //console.log(number);
  const digits = number.toString();
  //console.log(digits); // "13"
  const iArray = digits.split("").map(Number); // it will work without this because of implicit conversion
  console.log(iArray); //[1, 3]
  let sum = 0;
  //sum the values of the integer array
  for (let i = 0; i <= iArray.length; i++){
    // console.log(iArray.reduce(currentValue));

  }
  
  //const sumInt = stringArr.reduce();
 
  // // for (let i = 0; i <= stringArr.length; i++){
  // //   console.log(array.reduce(stringArr[i]));

  // }
}

const sumofDigits = sumDigits(13);
// //=> ;



// const checkPrimes = (num) => {
//   //find the square root of the number
//   squareRoot = Math.sqrt(num);
//   // loop through numbers starting at 2
//   for(let i = 2; i <= squareRoot; i++){
//     //console.log(i)
//   // check is num is evenly divisible by each number  
//     if(num % i === 0) {
//  // if true return true
//       return true
//     }
//   };
//     // if false, return false
//     return false
//   };
// console.log(checkPrimes(81));

// const printPrimes = (limit) => {
//   //for loop from 1 to limit
//   for (let i = 1; i <= limit; i++){
//     //if it is prime, print it
//     if (checkPrimes(i) === false){
//       console.log(i)
//     }else{
//       //Do Nothing
//     }
//     //if it isn't prime, ignore it
//   }

// }

// printPrimes(97);

















































