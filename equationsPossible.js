// /**
//  * @param {string[]} equations
//  * @return {boolean}
//  */
// var equationsPossible = function(equations) {
//     var graph = {}
//     let color = new Array(26).fill(0)
//     for (let i = 0; i < 26; i++) {
//       graph[i] = []
//     }
//     // 栈用来记录
//     // let stack = []
//     for(let equ of equations) {
//       if (equ[1] === '=') {
//         let x = equ.charCodeAt(0) - 'a'.charCodeAt(0)
//         let y = equ.charCodeAt(3) - 'a'.charCodeAt(0)
//         graph[x].push(y)
//         graph[y].push(x)
//       }
//     }
//     let count = 0
//     for (let start = 0; start < 26; start++) {
//       if (color[start] == 0) {
//         count++
//         let stack = []
//         stack.push(start)
//         // console.log(stack)
//         while(stack.length) {
//           let cur = stack.pop()
//           for (let i = 0; i < graph[cur].length; i++) {
//             let nei = graph[cur][i]
//             if (nei === 0) {
//               color[nei] = count
//               stack.push(nei)
//             }
//           }
//         }
//       }
//     }
//     // 遍历
//     for (let i = 0; i < equations.length; i++) {
//       let eqn = equations[i]
//       if (eqn[1] === '!') {
//         let x = eqn.charCodeAt(0) - 'a'.charCodeAt(0)
//         let y = eqn.charCodeAt(3) - 'a'.charCodeAt(3)
//         if (x === y || (color[x] !== 0 && color[x] === color[y])) {
//           return false
//         }
//       }
//     }
//     return true
// };
// let equations = ["a==b","b!=a"]
// console.log(equationsPossible(equations))
function test () {
  let a = 1
  let b = 1
  return a + b
}
console.log(test())