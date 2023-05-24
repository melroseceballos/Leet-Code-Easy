twoSum = (arr, target) => {
    if(arr.length < 2) return false
    for(let i=0; i<arr.length; i++) {
        let first = arr[i]
        for(let j= i + 1; j<arr.length; j++) {
            let second = arr[j]
            let sum = first + second
            if( sum === target){
                return [i, j]
            }
        }
    }

    return null
}

console.log(twoSum([2,7,11,15], 9))

console.log(twoSum([3,2,4], 6))

console.log(twoSum([3,3],6))
