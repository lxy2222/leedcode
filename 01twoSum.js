/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    //先复制一个数组
    var numTem = [],
        l = 0,
        r = nums.length - 1,
        result = [];

    for (var i = 0; i < nums.length; i++) {
        numTem[i] = nums[i];
    }
    numTem.sort(function(a, b) { return a - b });
    while (l < r) {
        if (numTem[l] + numTem[r] === target) {
            //判断有重复元素的情况
            if (numTem[l] === numTem[r]) {
                result.push(nums.indexOf(numTem[l]));
                result.push(nums.indexOf(numTem[r], l + 1));
            } else {
                result.push(nums.indexOf(numTem[l]));
                result.push(nums.indexOf(numTem[r]));
            }
            break;
        } else if (numTem[l] + numTem[r] > target) {
            r--;
        } else l++;
    }
    return result;
}
var arr = [0, 4, 3, 0];
var sum = twoSum(arr, 0);
console.log(sum);