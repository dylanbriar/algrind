/**
 * 
 * "Given the `root` of a binary tree, invert the tree, and return *its root*.
```
Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]
```
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

type BSTNode = {
  val: number,
  left?: BSTNode,
  right?: BSTNode
}

function invertTreeTS (root: BSTNode): BSTNode {
  if (!root) return root;
  if (root.left){
      if (root.left.left || root.left.right){
          invertTreeTS(root.left);
      }
  }
  if (root.right){
      if (root.right.left || root.right.right){
          invertTreeTS(root.right);
      }
  }
  //what's interesting is that you can take the next three lines and move them up to between the if (!root) and the if (root.left) and it still works
  //the only difference is that the switching is done before moving on to the next node, but in truth it doesn't matter whether it's done before or after
  let dummy: BSTNode | null | undefined = root.left;
  root.left = root.right;
  root.right = dummy;
  return root;
};