/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
  var colors = new Array(graph.length).fill(0)
  for (let i = 0; i < graph.length; i++) {
    // color设置为两种 1 和 -1
    // if (graph[i].length === 0) return false
    if (colors[i] === 0) {
      if (!dfs(i, -1, colors, graph)) {
        return false
      }
    }
  }
  return true
};
// 判断一条边上的两个点是否是一个颜色 如果是同一个颜色那么返回false
var dfs = function (node, color, colors, graph) {
  if (colors[node] !== 0 && colors[node] !== color) return false
  if (colors[node] !== 0) return true
  colors[node] = color
  for (let i = 0; i < graph[node].length; i++) {
    let edge = graph[node][i]
    if (!dfs(edge, -color, colors, graph)) {
      return false
    }
  }
  return true
}
let graph = [[],[2,4,6],[1,4,8,9],[7,8],[1,2,8,9],[6,9],[1,5,7,8,9],[3,6,9],[2,3,4,6,9],[2,4,5,6,7,8]]
// let graph = [[],[3],[],[1],[]]
console.log(isBipartite(graph))