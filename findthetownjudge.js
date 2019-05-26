/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
  var graph = new Map ()
  for (let i = 1; i <= N; i ++) {
    graph.set(i, 1)
  }
  for (let [v, e] of trust) {
    // console.log(v, e)
    graph.set(v, graph.get(v) - 1) // 不被信任的节点-1
    graph.set(e, graph.get(e) + 1) // 被信任的节点 + 1
  }
  // 遍历
  console.log(graph)
  for (let [key, value] of graph) {
    if (value === N) return key
  }
  return -1
};
console.log(findJudge(3, [[1,3],[2,3]]))