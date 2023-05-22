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
var isPalindrome = function(s) {
  s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));  // true

// always check for constraints like having to use .toLowerCase()
