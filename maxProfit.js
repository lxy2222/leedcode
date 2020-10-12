/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let cur = 0;
    let valley = prices[0];
    let peak = prices[0];
    let max = 0;
    while (cur < prices.length - 1) {
      while (cur < prices.length - 1 && prices[cur] >= prices[cur + 1]) cur++;
      valley = prices[cur];
      while (cur < prices.length - 1 && prices[cur] <= prices[cur + 1]) {
        cur++;
      }
      peak = prices[cur];
      max += peak - valley;
    }
    return max
};
let prices = [1,2,3,4,5];
console.log(maxProfit(prices))