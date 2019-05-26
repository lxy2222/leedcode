var findOrder = function(numCourses, prerequisites) {
  // init
  let graph = new Map()
  let color = {}
  let white = 1
  let gray = 2
  let black = 3
  let possible = true
  let topologicalOrder = []
  for (let [u, v] of prerequisites) {
    if (graph.has(v)) {
      let edges = graph.get(v)
      edges.push(u)
      graph.set(v, edges)
    } else {
      graph.set(v, [u])
    }
  }
  for (let i = 0; i < numCourses; i++) {
    color[i] = white
  }
  // dfs
  let dfs = function (node) {
    // console.log(graph)
    if (!possible) return
    color[node] = gray// being visiting
    let neighbors = graph.has(node) ? graph.get(node) : []
    for (let i = 0; i < neighbors.length; i++) {
      let neighbor = neighbors[i]
      if (color[neighbor] === white) {
        dfs(neighbor)
      } else if (color[neighbor] === gray) {
        possible = false
      }
    }
    color[node] = black // being visited
    topologicalOrder.push(node)
  }
  // 开始找
  let order = []
  for (let i = 0; i < numCourses; i++) {
    if (color[i] === white) {
      dfs(i)
    }
  }
  if (possible) {
    order = topologicalOrder.reverse()
  }
  return order
}
let numCourses = 4
let arr = [[1,0],[2,0],[3,1],[3,2]]
let res = findOrder(numCourses, arr)
console.log(res)