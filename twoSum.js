/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums,target){
  let res = [];
  let visited = new Map();
  for (let i = 0; i < nums.length; i++) {
      let num = nums[i];
      if (!visited.has(num)) {
        visited.set(num, i);
      }
      let other = target - num;
      if (visited.has(other)) {
        if ( i !== visited.get(other)) {
            res = i > visited.get(other) ? [visited.get(other), i] : [i, visited.get(other)]
        }
      }
      
  }
  return res
}
let nums = [3,2,4];
let target = 6
console.log(twoSum(nums, target))