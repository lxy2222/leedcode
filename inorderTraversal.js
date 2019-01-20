var inorderTraversal = function(root) {
  let result = []
  let stack = []
  while(root !== null || stack.length !== 0) {
    while (root) {
      stack.push(root)
      root = root.left
    }
    root = stack.pop()
    result.push(root.val)
    root = root.right
  }
  return result
};
