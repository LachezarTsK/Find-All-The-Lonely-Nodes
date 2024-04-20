
function getLonelyNodes(root: TreeNode | null): number[] {
    this.allLonelyNodes = new Array();
    collectAllLonelyNodeValues(root, false);
    return this.allLonelyNodes;
};


function collectAllLonelyNodeValues(node: TreeNode, isLonelyNode: boolean): void {
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
Class TreeNode is in-built in the solution file on leetcode.com. 
When running the code on the website, do not include this class.
 */
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}
