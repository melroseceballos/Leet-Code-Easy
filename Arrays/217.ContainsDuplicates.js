/** THE PROBLEM
 * Given an integer array nums, 
 * return true if any value appears at least twice in the array,
 *  and return false if every element is distinct.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // check if the array even contains atleast two numbers
  if(!(nums.length >= 2)) return false
  // do the first loop so you may be able to set
  // left pointer variable
   for(let i=0; i<nums.length; i++ ){
    let left = nums[i];
    // start right pointer from the 
    for (let j = i + 1; j<nums.length; j++){
        let right = nums[j]
        if(left === right){
            return true
           }
    }
  } 
  return false
};

console.log(containsDuplicate([3,3]))