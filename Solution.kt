
class Solution {

    private val allLonelyNodes = ArrayList<Int>()

    fun getLonelyNodes(root: TreeNode?): List<Int> {
        collectAllLonelyNodeValues(root, false);
        return allLonelyNodes;
    }

    private fun collectAllLonelyNodeValues(node: TreeNode?, isLonelyNode: Boolean) {
        if (node === null) {
            return;
        }
        if (isLonelyNode) {
            allLonelyNodes.add(node.`val`);
        }
        collectAllLonelyNodeValues(node.left, node.right === null);
        collectAllLonelyNodeValues(node.right, node.left === null);
    }
}

/*
Class TreeNode is in-built in the solution file on leetcode.com.
When running the code on the website, do not include this class.
 */
class TreeNode(var `val`: Int) {
    var left: TreeNode? = null
    var right: TreeNode? = null
}
