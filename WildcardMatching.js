/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    // dp[i][j] 代表前i项s和前j项p匹配
   let slen = s.length;
   let plen = p.length;
   let myMatch = function (slen, plen) {
    if (plen === 0) {
      return slen === 0;
    }
    // 使用状态方程
    let dp = [];
    for (let i = 0; i <= slen; i++) {
      dp[i] = [];
      for (let j = 0; j <= plen; j++) {
        dp[i][j] = false;
      }
    }
    
    dp[0][0] = true;
    //  匹配单独的*号
  for (let j = 1; j <= plen; j++) {
    if (p.charAt(j - 1) === '*') {
      dp[0][j] = dp[0][j - 1]
    }
  }
  // 匹配
  for (let i = 1; i <= slen; i ++) {
    for (let j = 1; j <= plen; j++) {
      if (p.charAt(j - 1) === '*') {
        dp[i][j] = dp[i - 1][j] || dp[i][j - 1]
      } else if (p.charAt(j - 1) === '?' || s.charAt(i - 1) === p.charAt(j - 1)) {
      dp[i][j] = dp[i - 1][j - 1]
      } else {
        dp[i][j] = false
      }
    }
  }
  return dp[slen][plen]
}
 return myMatch(slen, plen)
};
let text = "baaaaab";
let pattern = "*****ba*****ab";
console.log(isMatch(text, pattern))