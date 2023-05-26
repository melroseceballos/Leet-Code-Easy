/** PROBLEM
Given an integer array nums, 
return the third distinct maximum number in this array. 
If the third maximum does not exist, return the maximum number.
**/
 
// MY SOLUTION:
thirdDis = (arr) => {
  if (arr.length <= 2) {
    let high = Math.max(...arr)
    return high
  }
  return null
}

console.log(thirdDis([5, 2]))
