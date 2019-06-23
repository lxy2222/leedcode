/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    var graph = {}
    var answers = []
    for (let i = 0; i < equations.length; i++) {
      const [u, v] = equations[i]
      const weight = values[i]
      // 被除数
      if (graph[u]) {
       graph[u].push([v, weight])
      } else {
        graph[u] = [[v, weight]]
      }
      // 除数
      if (graph[v]) {
        graph[v].push([u, 1/weight])
      } else {
        graph[v] = [[u, 1/weight]]
      }
    }
    // 遍历输出query的结果
    queries.forEach((query) => {
      const res = dfs(graph, query[0], query[1])
      answers.push(res)
    })
    return answers
};
var dfs = function (graph, startNode, targetNode) {
  let visited = new Set ()
  let result = -1.0
  var recursive = function (node, sum = 1) {
    let cur = graph[node]
    if (!cur) return
    if (visited.has(node)) return
    visited.add(node)
    // 找到目标节点
    if (node === targetNode) {
      result = sum;
      return
    }
    for (let i = 0; i < cur.length; i ++) {
      recursive(cur[i][0], sum * cur[i][1])
    }
  }
  recursive(startNode)
  return result
}
var equations = [ ["a", "b"], ["b", "c"] ]
var values = [2.0, 3.0]
var queries = [ ["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"] ]
console.log(calcEquation(equations, values, queries))