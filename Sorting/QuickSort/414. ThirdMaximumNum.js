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
for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    if (!number.includes(current)) {
      distinctCount++;
      number.push(current);
      if (distinctCount === 3) {
        return current;
      }
    }
  }
  return null
}

console.log(thirdDis([5, 2]))
