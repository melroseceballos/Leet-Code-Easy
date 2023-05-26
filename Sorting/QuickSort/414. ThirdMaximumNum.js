/** PROBLEM 


// MY SOLUTION:
thirdDis = (arr) => {
  if (arr.length <= 2) {
    let high = Math.max(...arr)
    return high
  }
  return null
}

console.log(thirdDis([5, 2]))
