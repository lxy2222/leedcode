
var findTargetSumWays = function(nums, S) {
  let count = 0
  dfs(nums, S, 0, 0)
  return count
  function dfs(nums, S, index, curSum) {
    if (index === nums.length) {
      if (curSum === S) {
        ++count
      }
      return
    }
    // dfs 向下加
    dfs(nums, S, index + 1, curSum + nums[index])
  
    dfs(nums, S, index + 1, curSum - nums[index])
  }
};
// var dfs = function (nums, S, index, curSum) {
//   if (index === nums.length) {
//     if (curSum === S) {
//       ++count
//     }
//     return
//   }
//   // dfs 向下加
//   dfs(nums, S, index + 1, curSum + nums[index])

//   dfs(nums, S, index + 1, curSum - nums[index])
// }
let nums = [1, 1, 1, 1, 1]
console.log(findTargetSumWays(nums, 3))