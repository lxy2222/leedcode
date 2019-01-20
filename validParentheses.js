/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  var stack = [];
  var matchObj = {
      ")": "(",
      "}": "{",
      "]":"["
  }
  var keys = Object.keys(matchObj);
  var matchvalues = [];
  for(var key in matchObj) {
      matchvalues.push(matchObj[key]);
  }
 for(var i = 0; i < s.length; i ++) {
    let item = s[i]
     if (matchvalues.indexOf(item) != -1) {
         stack.push(s[i]);
     } else if (keys.indexOf(item != -1)) {
         //console.log(stack.pop())
         let topElement = stack.length === 0 ? '#': stack.pop()
         if (topElement !== matchObj[item]) {
             return false;
         }
     }
 }
  console.log(stack.length)
  return stack.length > 0 ? false : true;
}
console.log(isValid('()'))
