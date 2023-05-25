/** PROBLEM
A school is trying to take an annual photo of all the students. 
The students are asked to stand in a single file line in non-decreasing order by height. 
Let this ordering be represented by the integer array expected where expected[i] is the expected height of the ith student in line.
You are given an integer array heights representing the current order that the students are standing in. Each heights[i] is the height of the ith student in line (0-indexed).
Return the number of indices where heights[i] != expected[i].
**/
 




// CORRECT SOLUTION
heightChecker = (arr) => {
  // using the spread operagor to make new array
  // also using .sort method into an ascending order
  let sortedArr = [...arr].sort((a, b) => a - b); // Create a sorted version of the array
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sortedArr[i]) {
      count++;
    }
  }
  return count;
}
console.log(heightChecker([1, 1, 4, 2, 1, 3]));



// CORRECT SOLUTION w/ pivot
const partition = (arr, low, high) => {
  let pivot = arr[low];
  let i = low + 1;
  for (let j = low + 1; j <= high; j++) {
    if (arr[j] < pivot) {
      [arr[j], arr[i]] = [arr[i], arr[j]];
      i++;
    }
  }
  [arr[low], arr[i - 1]] = [arr[i - 1], arr[low]];
  return i - 1;
};
const quickSort = (arr, low, high) => {
  if (low < high) {
    let pivotIndex = partition(arr, low, high);
    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
  }
};
heightChecker = (arr) => {
  quickSort(arr, 0, arr.length - 1);
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) {
      count++;
    }
  }
  return count;
};

console.log(heightChecker([1, 1, 4, 2, 1, 3]));
