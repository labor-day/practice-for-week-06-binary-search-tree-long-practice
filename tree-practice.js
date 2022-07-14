const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {
  // Your code here
  if (rootNode.left === null) {
    return rootNode.val;
  }

  if (rootNode.left) {
    return findMinBST(rootNode.left);
  }
}

function findMaxBST (rootNode) {
  // Your code here
  if (rootNode.right === null) {
    return rootNode.val;
  }

  if (rootNode.right) {
    return findMaxBST(rootNode.right);
  }
}

function findMinBT (rootNode) {
  // Your code here
  let min = rootNode.val;

  let stack = [rootNode];

  while (stack.length > 0) {
    let top = stack.pop();
    if (top.val < min) {min = top.val};

    if (top.right) {stack.push(top.right);}
    if (top.left) {stack.push(top.left);}
  }

  return min;
}

function findMaxBT (rootNode) {
  // Your code here
  let max = rootNode.val;

  let stack = [rootNode];

  while (stack.length > 0) {
    let top = stack.pop();
    if (top.val > max) {max = top.val};

    if (top.right) {stack.push(top.right);}
    if (top.left) {stack.push(top.left);}
  }

  return max;
}

function getHeight (rootNode, height = 0) {
  // Your code here

  if (rootNode === null) {return -1;}

  height = 1;
  height = height + Math.max(getHeight(rootNode.left), getHeight(rootNode.right));

  return height;

}


function countNodes (rootNode) {
  // Your code here
  let stack = [rootNode];
  let count = 0;

  while (stack.length > 0) {

    let top = stack.pop();
    count++;
    if (top.right) {stack.push(top.right);}
    if (top.left) {stack.push(top.left);}
  }

  return count;
}

function balancedTree (rootNode) {
  // Your code here

  let left = getHeight(rootNode.left);
  let right = getHeight(rootNode.right);

  if (Math.abs(left - right) <= 1) {
    return true;
  }
  return false;

}

function getParentNode (rootNode, target) {
  // Your code here

  if (rootNode === null) {return undefined;}
  if (rootNode.val === target) {return null;}
  if (rootNode.right && rootNode.right.val === target) {return rootNode;}
  if (rootNode.left && rootNode.left.val === target) {return rootNode;}

  return getParentNode(rootNode.left, target) || getParentNode(rootNode.right, target)

}

function inOrderPredecessor (rootNode, target, previous) {

    if (rootNode === null) {
      return null;
    }

    if (rootNode.val === target) {
      if (rootNode.left !== null) {
        return findMaxBST(rootNode.left);
      }
    }

    else if (rootNode.val > target) {
      return inOrderPredecessor(rootNode.left, target, previous);
    }

    else {
      previous = rootNode;
      return inOrderPredecessor(rootNode.right, target, previous);
    }

    return previous ? previous.val : null;
}

function findNode(rootNode, target) {
  let found = null;
  let stack = [rootNode];

  while (stack.length > 0) {

    let top = stack.pop();
    if (top.val === target) {
      found = top;
    }
    if (top.right) {stack.push(top.right);}
    if (top.left) {stack.push(top.left);}
  }

  return found;
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent
  let node = findNode(rootNode, target);
  if (!node) {
    return undefined;
  }

  // Set target based on parent
  let parent = getParentNode(rootNode, target);

  let children = 0;
  if (node.left) {children++;}
  if (node.right) {children++;}

  // Case 0: Zero children and no parent:
  //   return null
  if (!children && !parent) {
    return null;
  }

  // Case 1: Zero children:
  //   set the parent that points to it to null
  if (!children) {
    if (parent.val > node.val) {
      parent.left = null;
    } else {
      parent.right = null;
    }
  }

  // Case 2: Two children:
  //   set the value to its in-order predecessor, then delete the predecessor
  if (children === 2) {
    //console.log("root", rootNode);
    let predecessor = inOrderPredecessor(rootNode, target);
    node.val = predecessor;

    let parentOfPredecessor = getParentNode(node.left, node.val);

    if (!parentOfPredecessor) {node.left = null;}
    if (parentOfPredecessor) {parentOfPredecessor.right = null;}

  }

  // Case 3: One child:
  //   Make the parent point to the child
  if (children === 1) {
    let child = null;
    if (node.left) {child = node.left}
    else {child = node.right}

    if (parent.val > node.val) {
      parent.left = child;
    } else {
      parent.right = child;
    }
  }

}

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}
