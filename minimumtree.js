/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
  var leaves = {}
  var queue = []
  if (n === 1) return [0]
  for (let i = 0; i < n; i ++) {
      leaves[i] = []
  }
  for (let [u, v] of edges) {
      leaves[u].push(v)
      leaves[v].push(u)
  }
  // 遍历叶子节点
  Object.keys(leaves).forEach((key, value) => {
      if (value.length === 1) {
          queue.push(key)
      }
  })
//     首先要减掉叶子节点
  while (n > 2) {
     var len = queue.length
     n = n - len
     while (queue.length) {
         let cur = queue.shift()
//            遍历
         for (let i = 0; i < leaves[cur].length; i++) {
             let u = leaves[cur][i]
             let index = leaves[u].indexOf(cur)
             if (index !== -1) {
                 leaves[u].splice(index, 1)
             }
             if (leaves[u].length === 1) {
               queue.push(u)
             }
         }
     }
  }
  return queue
};
var n = 4, edges = [[1, 0], [1, 2], [1, 3]]
console.log(findMinHeightTrees(n, edges))