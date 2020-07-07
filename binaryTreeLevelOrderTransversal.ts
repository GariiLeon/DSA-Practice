/**
 * JULY LeetCoding Challenge, Day 2
 * Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).
 * For example:Given binary tree [3,9,20,null,null,15,7],
 * return its bottom-up level order traversal as:
 * [
 *  [15,7],
 *  [9,20],
 *  [3]
 * ]
 */

//   Definition for a binary tree node.
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function levelOrderBottom(root: TreeNode | null): number[][] {
    let height : number = getHeight(root);
    let res : number[][] = new Array(height);
    for(let i=0;i<res.length;i++){
        res[i] = [];
    }
    getElem(root,res,0);
    return res.reverse();
};

function getHeight(node : TreeNode|null) : number{
    if(node==null) return 0;
    let leftHeight = getHeight(node.left);
    let rightHeight = getHeight(node.right);
    if(leftHeight>rightHeight) return leftHeight+1;
    else return rightHeight+1;
}
function getElem(node : TreeNode | null,res : number[][], i : number){
    if(node==null) return;
    res[i].push(node.val)
    getElem(node.left,res,i+1);
    getElem(node.right,res,i+1);
    return res;
}

var root = new TreeNode(3,new TreeNode(9),new TreeNode(20,new TreeNode(15),new TreeNode(7)));
console.log(levelOrderBottom(root)) // [[15,7],[9,20],[3]]