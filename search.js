/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
  var left = 0
  var right = nums.length - 1
  var binarySearch = function (arr, l, r, target) {
      if (arr[l] === target || arr[r] === target) {
          return true
      }
      if (l > r) return false
      let mid = Math.floor((l + r) / 2)
      if (arr[mid] === target) return true
    //   处理相同
    if (arr[mid] === arr[l]) {
        if (arr[l] === target) return true
        return binarySearch(arr, l + 1, r, target)
    }
      if (arr[l] < arr[mid]) {
          if ((target >= arr[l] && target <= arr[mid]) || arr[l] === arr[mid]) {
              return binarySearch(arr, l, mid - 1, target)
          }
          return binarySearch(arr, mid + 1, r, target)
      }
      if (target >= arr[mid] && target <= arr[r]) {
          return binarySearch(arr, mid + 1, r, target)
      }
      return binarySearch(arr, l, mid - 1, target)
  }
  return binarySearch(nums, left, right, target)
};
let nums = [1,1,1,3,1]
console.log(search(nums, 3))