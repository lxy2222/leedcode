/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
    var leaves = {}
    for (let i = 0; i < n; i++) {
        leaves[i] = new Set()
    }
    for (let [u, v] of edges) {
        leaves[u].add(v)
        leaves[v].add(u)
    }
    // console.log(leaves)
    while (Object.keys(leaves).length > 2) {
        Object.keys(leaves).filter(key => leaves[key].size < 2).forEach(key => {
            leaves[key].forEach((item) => {
                leaves[item].delete(key)
            })
            delete leaves[key]
        })
    }
    return Object.keys(leaves)
};
var n = 6
    edges = [
        [3,0],[3,1],[3,2],[3,4],[5,4]
    ]
    console.log(findMinHeightTrees(n, edges))