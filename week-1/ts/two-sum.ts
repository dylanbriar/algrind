/*
  Given an array of numbers and a target number, if two of the numbers in the array add up to the target, return the indices at which they're located. Otherwise, return false.
 Each input would have exactly one solution. You may not use the same element twice.

  const nums = [2, 5, 11, 15]
  twoSum(nums, 7) -> true

  twoSum(nums, 9) -> false

  best video on this: https://www.youtube.com/watch?v=isGKzmwDREg
*/

//brute force solution, O(n^2)
const twoSumBrute = (arr: number[], target: number): boolean => { 
  for (let i = 0; i < arr.length; i++){
    for (let j = i+1; j < arr.length; j++){
      if (i+j === target){
        return true;
      }
    }
  }
  return false;
}

//two-pass map solution, O(n)
type IndexMap<T> = {
  [index: number]: T,
}
const twoSum = (arr: number[], target: number): boolean | number[] => {
  //initialize then build out map
  const numberToIndex: IndexMap<number> = {};
  for (let i = 0; i < arr.length; i++){
    numberToIndex[arr[i]] = i;
  }
  //loop over given array and check if its pair to reach the target exists
  for (let i = 0; i < arr.length; i++){
    const numberNeeded = target - arr[i];

    if (numberToIndex[numberNeeded] && numberToIndex[numberNeeded] !== i) {
      return [i, numberToIndex[numberNeeded]];
    }
  }
  return false;
}

//there is a one pass solution, but it doesn't make a difference in Big(O) notation, and is kind of mentally taxing to read so not really great for interviews

//here it is anyway 
// function twoSum(nums, target) {
//   const numsHas = {};
//   for (let i = 0; i < nums.length; i++){
//       const addend = target - nums[i];
//       if (numsHas[addend] !== undefined){return [numsHas[addend], i]}
//       numsHas[nums[i]] = i;
//   }
// }

// Given an array of numbers and a target number, return true if three of the numbers in the array add up to the target. Otherwise, return false.
//needs testing
const threeSum = (arr, target) => { 
  for (let i = 0; i < arr.length; i++){
    const newTgt = target - arr[i]; 
    if (twoSum([], newTgt)) {return true}
  }
}


// module.exports = { twoSum, threeSum };