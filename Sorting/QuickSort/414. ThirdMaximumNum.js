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
      // and then add 1 to distint count 
// to keep track of distinct values
      distinctCount++;
      number.push(current);
      // if the number of distinct count has reached 3
// it returns the last number to be added 
// which is the 3rd distinct number
      if (distinctValues.length === 3) {
    return distinctValues[2];
  } else {
    return Math.max(...distinctValues);
  }
    }
  }
  // if none are true, returning null
  return null
}

console.log(thirdDis([5, 2]))
