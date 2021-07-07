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

const checkPalindrome = (cut) => {
  const lowerCase = cut.toLowerCase(); 
  console.log(lowerCase);
  const splitString = lowerCase.split('');
  console.log(splitString);
  const arr1 = splitString.reverse();
  console.log(arr1);
  const reversedString = arr1.join("");
  console.log(reversedString);

  if (cut === reversedString){
    
    return true;
  
  } else {
    
    return false;
  }


}

console.log(checkPalindrome("radar"));


//// DIGITAL SUM ////

// Write a function 'sumDigits' that accepts a number and returns the sum of its digits. // 

const sumDigits = (num) => {

    // convert num to a string
    const digits = num.toString();

    // split digits into an array of individual characters
    const stringArray = digits.split("");

    const integerArray = parseInt(stringArray);

    console.log(integerArray);
    for (let i = 0; i <= integerArray.length; i++){

    }
    console.log(integerArray);
    // console.log(stringArray); 
};



console.log(sumDigits(65));




// const value = 68,
//     sum = value
//         .toString()
//         .split('')
//         .map(Number)
//         .reduce(function (a, b) {
//             return a + b;
//         }, 0);

// console.log(sum);


///////////////////// PYTHAGORAS ///////////////////////

const calculateSide = (sideA, sideB) => {
  // figure out side C // 
  // a^2 + b^2 = c^2

const aSq = sideA * sideA; 
const bSq = sideB * sideB;

const sideC = Math.sqrt(aSq + bSq)

return sideC;

}

// console.log(calculateSide(3, 4));




//// PRIME NUMBERS ////

 const checkPrimes = (num) => {
  
  // find the square root of the number //
    squareRoot = Math.sqrt(num) 
  // loop through numbers starting at 2 // 
    for (let i = 2; i <= squareRoot; i++){
      if (num % i === 0) {
        return true;
      }
    };

      return false 
};


// const printPrimes = (limit) => {
//   // For loop from 1 to limit // 
//   for (let i = 1; i <= limit; i++){
//       if(checkPrimes(i) === false){
//       console.log(i);
//     }
//   }
// };
   

printPrimes(97);

const checkPandigital = (num) => {
  let result = false;



  // if 0 
  if (num === 0){
    return false; // this will immediately stop execution and exit the function // 
  }
  // convert to array //

  const numStr = num.toString();
  const digitArr = numStr.split('');
  // if array.length > 9 return false // 
  if (digitArr.length > 9){
    return false;
  }



  // if the largest digit is equal to digitArr.length //

  // find largest number
  // loop -- check each digit -- see if it's the largest
  let biggestDigit = digitArr[0];
  for (let i = 0; i < digitArr.length; i++) {

    // if the digit we are looking at is bigger than "biggestDigit"
    if(digitArr.length[i] > biggestDigit) {
      biggestDigit = digitArr[i];
    }

  }

  for (let j = i + 1; j < digitArr.length; j++) {
    if(digitArr[i] === digitArr[j]) {

    }
  }


  if (biggestDigit != digitArr.length) {
    console.log('largest digit != array length so nope');
    return false; 
  }




  // if not make false // 

  // for each digit // 
  // if its a zero or 
  // return false // 
  // check if it appears 


  return result;

}

console.log(checkPandigital(12346));
console.log(checkPandigital(12345));


// Insert Dash // 

const insertDash = (num) => {
  const stringDigits = num.toString(); 
  const arrDigits = stringDigits.split(''); 
  console.log(arrDigits.length); 
  let newArrDigits = [];
  for(leti = 0; i < arrDigits.length; i++){
    newArrDigits[i] = parseInt(arrDigits[i]);
    console.log(newArrDigits); 
  }

  for(let j = 0; j < newArrDigits.length; j++) {
    console.log(newArrDigits[j-1], newArrDigits[j]);
    if(((newArrDigits[j - 1] % 2) === 1) && ((newArrDigits[j] % 2) === 1 )) {
      newArrDigits.splice(j, 0, '-');
    }
  }

  return newArrDigits.join(''); 
}


console.log(insertDash(394949494920294920));








