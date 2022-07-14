// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

// Your code here

// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    // Your code here
    this.root = null;
  }

  insert(val, currentNode=this.root) {
    // Your code here
    let newNode = new TreeNode(val);

    if (this.root === null) {
      this.root = newNode;
      return;
    }

    if (val < currentNode.val) {
      if (currentNode.left === null) {
        currentNode.left = newNode;
      } else {
        this.insert(val, currentNode.left);
      }
    }

    if (val > currentNode.val) {
      if (currentNode.right === null) {
        currentNode.right = newNode;
      } else {
        this.insert(val, currentNode.right);
      }

    }
  }

  search(val, currentNode=this.root) {
    // Your code here

    if (currentNode === null) {return false;}
    if (val === currentNode.val) {
      return true;
    }

    if (val < currentNode.val) {
      return this.search(val, currentNode.left);
    } else {
      return this.search(val, currentNode.right);
    }

  }


  preOrderTraversal(currentNode = this.root) {
    // Your code here
    console.log(currentNode.val);
    if (currentNode.left !== null) {
      this.preOrderTraversal(currentNode.left);
    }

    if (currentNode.right !== null) {
      this.preOrderTraversal(currentNode.right);
    }
  }


  inOrderTraversal(currentNode = this.root) {
    // Your code here

    if (currentNode.left) {
      this.inOrderTraversal(currentNode.left);
    }

    console.log(currentNode.val);

    if (currentNode.right) {
      this.inOrderTraversal(currentNode.right);
    }

  }


  postOrderTraversal(currentNode = this.root) {
    // Your code here
    if (currentNode.left) {
      this.postOrderTraversal(currentNode.left);
    }
    if (currentNode.right) {
      this.postOrderTraversal(currentNode.right);
    }


    console.log(currentNode.val);

  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // your code here

    let queue = [];
    queue.push(this.root);

    while (queue.length > 0) {
      let first = queue.shift();
      console.log(first.val);

      if (first.left) {
        queue.push(first.left);
      }

      if (first.right) {
        queue.push(first.right);
      }
    }

  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // your code here
    let stack = [];

    stack.push(this.root);

    while (stack.length > 0) {
      let first = stack.pop();
      console.log(first.val);

      if (first.left) {
        stack.push(first.left);
      }

      if (first.right) {
        stack.push(first.right);
      }
    }
}
}

module.exports = { BinarySearchTree, TreeNode };
