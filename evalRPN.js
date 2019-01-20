let evalRPN = function (tokens) {
  let operationList = ['+', '-', '*', '/']
  let stack = []
  for (let i = 0; i < tokens.length; i ++) {
    let token = tokens[i]
    if (!operationList.includes(token)) {
      // 如果是整数将他们push入栈
      stack.push(token)
    } else if (operationList.includes(token)) {
      let operand_1 = parseInt(stack.pop())
      let operand_2 = parseInt(stack.pop())
      let result = ''
      switch(token){
        case '+':
          result = operand_2 + operand_1
          stack.push(result)
          break
        case '-':
          result = operand_2 - operand_1
          stack.push(result)
          break
        case '*':
          result = operand_1 * operand_2
          stack.push(result)
          break
        case '/':
          result = parseInt(operand_2 / operand_1)
          stack.push(result)
          break
        default:
          break
      }
    }
  }
  return stack[0]
}
let tokens =  ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
console.log(evalRPN(tokens))