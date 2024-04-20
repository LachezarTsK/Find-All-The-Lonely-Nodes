
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var getLonelyNodes = function (root) {
    this.allLonelyNodes = new Array();
    collectAllLonelyNodeValues(root, false);
    return this.allLonelyNodes;
};

/**
 * @param {TreeNode} node
 * @param {boolean} isLonelyNode
 * @return {void}
 */
function collectAllLonelyNodeValues(node, isLonelyNode) {
    if (node === null) {
        return;
    }
    if (isLonelyNode) {
        this.allLonelyNodes.push(node.val);
    }
    collectAllLonelyNodeValues(node.left, node.right === null);
    collectAllLonelyNodeValues(node.right, node.left === null);
}

/*
 Function TreeNode is in-built in the solution file on leetcode.com. 
 When running the code on the website, do not include this function.
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}
