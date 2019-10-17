/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

    if (s.length === 0) return 0
    let n = s.length
    let prev = -1
    let cur_len = 1
    let max_len = 1
    let visited = new Map()
    //  用来保留最后出现的字母
    visited.set(s.charAt(0), 0)
    for (let i = 1; i < n; i++) {
      if (visited.has(s.charAt(i))) {
        prev = visited.get(s.charAt(i))
      }
      if (prev === -1 || i - cur_len > prev) {
        cur_len ++
      } else {
        if (cur_len > max_len) {
          max_len = cur_len
        }
        cur_len = i - prev
      }
      visited.set(s.charAt(i), i)
    }
    if (cur_len > max_len) {
      max_len = cur_len
    }
    return max_len
};
console.log(lengthOfLongestSubstring('bbb'))