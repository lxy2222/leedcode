/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

// let visiting;   // is being explored
// let visited;  // is already explored
// let graph;

// var canFinish = function(numCourses, prerequisites) {
//     graph = new Map();
//     visiting = new Set();
//     visited = new Set();
    
//     for(let [v, e] of prerequisites){
//         if(graph.has(v)){
//             let edges = graph.get(v);
//             edges.push(e);
//             graph.set(v,edges);
//         }else{
//             graph.set(v,[e]);
//         }
//     }
    
//     for(const [v,e] of graph){
//         if(DFS(v)){
//             return false; //if cyclic it will not finish so it is false
//         }
//     }
    
//     return true;
// }

// var DFS = function(v){
//     visiting.add(v);
//     let edges = graph.get(v);   // get all the edges to explore
    
//     if(edges){
//         //console.log(edges)
//        for(let e of edges){
//             if(visited.has(e)){ //skip if it is explored already
//                 continue;
//             }

//             if(visiting.has(e)){ //found e is being explored
//                 return true;
//             }

//             if(DFS(e)){ // DFS deeper if this e is cyclic
//                 return true;
//             }
//         } 
//     }   
    
//     visiting.delete(v); // remove from visiting set when all decedant v are visited
//     visited.add(v);
//     return false;
// }
let canFinish = function (numCourses, prerequisites) {
    let white = 1
    let gray = 2
    let black = 3
    let color = {}
    let graph = new Map()
    let possible = true
    for (let i = 0; i < numCourses; i++) {
        color[i] = white
    }
    for (let [u, v] of prerequisites) {
        if (graph.has(v)) {
            let neighbors = graph.get(v)
            neighbors.push(u)
            graph.set(v, neighbors)
        } else {
            graph.set(v, [u])
        }
    }
    let dfs = function (node) {
        if (!possible) return false
        color[node] = gray
        let neighbors = graph.has(node) ? graph.get(node) : []
        for (let neighbor of neighbors) {
            if (color[neighbor] === white) {
                dfs(neighbor)
            } else if (color[neighbor] === gray) {
                possible = false
            }
        }
        color[node] = black
    }
    for (let i = 0; i < numCourses; i++) {
        if (color[i] === white) {
            dfs(i)
        }
    }
    return possible
}
console.log(canFinish(2, [[1,0]]))