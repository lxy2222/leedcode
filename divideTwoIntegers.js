/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let maxVal = Math.pow(2, 31) - 1;
    let sign = ((dividend < 0 ) ^ (divisor < 0)) ? -1 : 1;
    let res = Math.abs(dividend) / Math.abs(divisor);
    res = parseInt(res) * sign;
    return res < maxVal ? res : maxVal;
};
console.log(divide(10, -3))