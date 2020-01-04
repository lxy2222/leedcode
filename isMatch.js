/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    return myMatch(s, s.length - 1, p, p.length -1)
};
let myMatch = (s, i, p, j) => {
  const FRONT = -1;
  if (j === FRONT) {
    return i === FRONT
  }
  if (p.charAt(j) === '*') {
    if (i > FRONT && (p.charAt(j - 1) === '.' || p.charAt(j - 1) === s.charAt(i))) {
      if (myMatch(s, i - 1, p, j)) return true
    }
    return myMatch(s, i, p, j - 2)
  }
  if (p.charAt(j) === '.' || p.charAt(j) === s.charAt(i)) {
    return myMatch(s, i - 1, p, j - 1)
  }
  return false
}
let str = 'aab';
let pattern = 'c.a*b';
console.log(isMatch(str, pattern))