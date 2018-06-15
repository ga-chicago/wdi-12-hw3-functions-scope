// The difference between a parameter and an argument is that parameter is a discription of what needs to be there and and argument is what is actually being calculated.
// a console.log you are unable to return and use the result
const checkPalindrome = (str) => {
	const string =str.toUpperCase()
	const stringArr = string.split("")
	const stringRev = stringArr.reverse()
	const stringRever = stringRev.join("")
	if (stringRever === string) {
		return true
	}
	else {
		return false
	}
	
 }

console.log(checkPalindrome("Radar"))

const checkPrimes = (num) =>{
	square = Math.sqrt(num);
	for (let i = 2; i <= square; i++) {
		if (num % i === 0){
			return true
		}
		
	};
	return false;
};
//console.log(checkPrimes(81));
const printPrimes = (num) => {
	for (let i = 1; i <= num; i++){
		if(checkPrimes(i) === false){
			console.log(i);
		}else{
			//do nothing
		}
	}
}
printPrimes(97)