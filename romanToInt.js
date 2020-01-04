/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let romanMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
  let res = 0
  for (let i = 0; i < s.length; i++) {
    let cur = romanMap[s.charAt(i)]
    if (i + 1 < s.length && romanMap[s.charAt(i + 1)] > cur) {
      cur = -cur
    }
    res += cur
  }
  return res
};
console.log(romanToInt('IV'))