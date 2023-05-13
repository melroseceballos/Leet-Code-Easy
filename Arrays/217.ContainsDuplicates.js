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
  if(!(nums.length >= 2)) return false
   for(let i=1; i<nums.length; i++ ){
    let left = nums[i];
    for (let j = i + 1; j<nums.length; j++){
        let right = nums[j]
        if(left === right){
            return true
           }
    }
  } 
  return false
};

console.log(containsDuplicate([1,2,3,4,6,2,9]))