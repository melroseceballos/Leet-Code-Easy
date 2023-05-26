/** PROBLEM
Given an integer array nums, 
return the third distinct maximum number in this array. 
If the third maximum does not exist, return the maximum number.
**/

// CORRECT SOLUTION:
let thirdMax = function(nums) {
    // Sort the array in non-increasing order.
    nums.sort((a, b) => b - a);
    let elemCounted = 1;
    let prevElem = nums[0];
    for (let index = 1; index < nums.length; ++index) {
        // Current element is different from previous.
        if (nums[index] != prevElem) {
            elemCounted += 1;
            prevElem = nums[index];
        }
        // If we have counted 3 numbers then return current number.
        if (elemCounted == 3) {
            return nums[index];
        }
    }
    // We never counted 3 distinct numbers, return largest number.
    return nums[0];
};
 
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
