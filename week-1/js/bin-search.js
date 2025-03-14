// given an array of integers nums, which is Sorted in ascending order, and an integer Target, write a function to search target in nums. if target exists, then return its index. otherwise, return -1.

function binSearch (nums, tgt) {
  if (nums.length < 1) throw new Error('No values to search');
  let right = nums.length - 1;
  if (nums[right] === tgt) return right;
  let left: Number = 0;
  if (nums[left] === tgt) return left;
  let mid: Number = Math.floor(right/2);
  if (nums[mid] === tgt) return mid;
  while (right > left){
    if (nums[mid] > tgt){
      right = mid; 
      mid = left + Math.floor((right-left)/2);
    }
    else if (nums[mid] < tgt){
      left = mid;
      mid = left + Math.floor((right-left)/2);
    }
    else return mid;
  }
  return -1;
}
