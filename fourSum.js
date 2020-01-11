/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
   let collected = new Set();
   nums.sort((a, b) => {
     return a - b
   });
   let res = [];
    //  移动滑动窗口
   for (let i = 0; i < nums.length - 3; i++) {
     let t1 = target - nums[i];
     for (let j = i + 1; j < nums.length; j++) {
       let t2 = t1 - nums[j];
       let left = j + 1;
       let right = nums.length - 1;
       while (left < right) {
         let sum = nums[left] + nums[right];
         if (sum === t2) {
           if (!collected.has(`${nums[i]}${nums[j]}${nums[left]}${nums[right]}`)) {
              res.push([ nums[i], nums[j], nums[left], nums[right]]);
              collected.add(`${nums[i]}${nums[j]}${nums[left]}${nums[right]}`)
           }
           left++;
           right--;
         } else if (sum < t2) {
           left++;
         } else {
           right--;
         }
       }
     }
   }
   return res;
};
let nums = [1, 0, -1, 0, -2, 2];
let target = 0;
console.log(fourSum(nums, target))