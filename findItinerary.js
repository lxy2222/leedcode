/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    let graph = {}
    let res = []
    for (let [from, to] of tickets) {
      if (graph[from]) {
        graph[from].push(to)
      } else {
        graph[from] = [to]
      }
    }
    // adapt edges in lexial order
    for (let node in graph) {
      if (graph[node] && graph[node].length > 0) {
        graph[node].sort()
      }
    }
    // console.log(graph)
    let dfs = function (node) {
      let edges = graph[node] || []
      // res.push(node)
      while (edges.length > 0) {
        let cur = edges.shift()
        dfs(cur)
      }
      // traverse all adjust node
      // 遍历所有可以连通的店
      res.push(node)
    }
    dfs('JFK')
    return res.reverse()
};
let tickets = [["JFK","KUL"],["JFK","NRT"],["NRT","JFK"]]
console.log(findItinerary(tickets))