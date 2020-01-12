/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;
    let tmp;
    while (mid <= high) {
      switch(nums[mid]) {
        case 0:
          tmp = nums[mid];
          nums[mid] = nums[low];
          nums[low] = tmp;
          low++;
          mid++
          break;
        case 1:
          mid++;
          break;
        case 2:
          tmp = nums[mid];
          nums[mid] = nums[high];
          nums[high] = tmp;
          high--;
          break;
      }
    }
    // console.log(nums)
};
sortColors([2,0,2,1,1,0])