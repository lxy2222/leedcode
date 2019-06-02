/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
  var count = 0;
  let arr = nums.sort((a, b) => {
    return a - b
  });
  for (let i = 0; i < arr.length - 2; i++) {
    let k = i + 2;
    for (let j = i + 1; j < arr.length - 1 && arr[i] !== 0; j++) {
      k = findBinarySearch(arr, k, arr.length - 1, arr[i] + arr[j]);
      count += k - j - 1;
      
    }
  }
  return count;
};
var findBinarySearch = function (arr, l, r, sum) {
  while (r >= l && r < arr.length) {
    let mid = parseInt((l + r) / 2);
    if (arr[mid] >= sum) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return l;
}
let nums = [24,3,82,22,35,84,19] 
console.log(triangleNumber(nums))