
// dfs解法
let cloneGraph = function(graph) {
    let newNodes = {}
    return dfs (graph)
    function dfs (node) {
      if (! node) return node
      // 如果没有放在新节点里面
      if (! newNodes[node.label]) {
        newNodes[node.label] = new UndirectedGraphNode(node.label)
        // 处理邻居
        newNodes[node.label].neighbors = node.neighbors.map(dfs)
      }
      return newNodes[node.label]
    }
};