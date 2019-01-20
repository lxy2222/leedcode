var repeate = function (str, n) {
  n = parseInt(n)
  if (n === 1) return str
  let result = ''
  for (let i = 0; i < n; i ++) {
    result += str
  }
  return result
}
var decodeString = function (s) {
  // let nums = s.match(/\d/g)
  let stack = []
  let result = ""
  // let str = ''
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ']') {
      stack.push(s[i])
    } else {
      let substr = ""
      let str = ""
      // let top = stack.length - 1
      while (stack[stack.length - 1] !== '[') {
        str = stack.pop() + str
      }
      stack.pop() // [
      let num = ""
      while (!isNaN(Number(stack[stack.length - 1]))) {
        num = stack.pop() + num
      }
      substr = repeate(str, num)
      stack.push(substr)
    }
  }
  // console.log(stack)
  while(stack.length > 0) {
    result = stack.pop() + result
  }
  return result
}
let test = "2[abc]3[cd]ef"
console.log(decodeString(test))