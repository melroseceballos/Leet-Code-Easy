/** PROBLEM
Given an integer array nums, 
return the third distinct maximum number in this array. 
If the third maximum does not exist, return the maximum number.
**/
 
// MY SOLUTION:
thirdDis = (arr) => {
  let distinctCount = 0;
  let number = [];
  //check if array length is 2 or less
 // returns the biggest number
  if (arr.length <= 2) {
    let high = Math.max(...arr)
    return high
  }
for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    // if the current iteration is not in the
 // new array, then add it in

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
