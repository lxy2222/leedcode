/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// var strStr = function(haystack, needle) {
//     let res = -1;
//     let len = haystack.length;
//     let strLen = needle.length;
//     let first = needle.charAt(0);
//     if (haystack.length < needle.length) return res;
//     if (strLen === 0) return 0;
//     for (let i = 0; i < len; i++) {
//       if (haystack.charAt(i) === first) {
//         if (compareStr(haystack.substr(i, strLen), needle)) {
//           res = i;
//           break;
//         }
//       }
//     }
//     return res;
// };
// var compareStr = (cur, str) => {
//   for (let i = 0; i <= cur.length; i++) {
//     if (cur.charAt(i) !== str.charAt(i)) {
//       return false
//     }
//   }
//   return true;
// }
var strStr = (haystack, needle) => {
  let x = haystack.length;
  let y = needle.length;
  if (y === 0) return 0;
  let pos;
  for (let i = 0; i <= x - y; i++) {
    for (pos = 0; pos < y; pos++) {
      if (haystack.charAt(i + pos) !== needle.charAt(pos)) {
        break;
      }
    }
    if (pos === y) return i
  }
  return -1;
}
console.log(strStr("mississippi", 'issipi'))