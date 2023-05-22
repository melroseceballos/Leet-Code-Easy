/** THE PROBLEM 
Given a string s, 
return the longest palindromic 
substring in s.
**/

// CORRECT SOLUTION
var longestPalindrome = function(s) {
    start = 0
    maxLength = 1;

    function expandAroundCenter (right, left){
        while (left >= 0 && right<s.length && s[left] === s[right]){
            let currentLength = right - left + 1
            if(currentLength > maxLength ){
                start = left
                maxLength = currentLength
            }
                left--
                right++
            }
            
        }
          for(let i=0; i<s.length; i++){
                    expandAroundCenter(i,i)
                    expandAroundCenter(i, i+1)
    }
       return s.substring(start, start+maxLength)
};