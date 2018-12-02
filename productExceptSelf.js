var productExceptSelf = function (nums) {
    var len = nums.length;
    if (len < 1)
        return;
    var result = [];
    // 存储前面几位的数值
    var productSoFar = 1;
    for (var i = 0; i < len; i++) {
        result[i] = productSoFar;
        productSoFar = nums[i] * productSoFar;
    }
    // console.log('result', result)
    productSoFar = 1;
    for (var j = len - 1; j >= 0; j--) {
        result[j] *= productSoFar;
        productSoFar *= nums[j];
    }
    return result;
};
console.log(productExceptSelf([1, 2, 3, 4]));
