/** THE PROBLEMS **/

/** A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters 
and numbers.Given a string s,
return true if it is a palindrome,
or false otherwise. **/


// MY SOLUTION: #1
isPalindrome = (str) => {
for (let i = 0; i<str.length; i++){
	let outer = str[i]
  for(let j = str.length -1; j>str.length; j--){
    let inner = str[j]  
    if(outer === inner){
		return true
}
  }
}
    return false
}


// CORRECT SOLUTION
isPalindrome = (str) => {
let left = 0
let right = str.length - 1
while(left<right){
  if(str[left] !== str[right]){
    return false
  }
	left++
	right--
}
  return true
}
console.log(isPalindrome("raceacar"));  // true
console.log(isPalindrome("amanaplanacanalpanama"));  // true
console.log(isPalindrome("paste"));
console.log(isPalindrome(""));
