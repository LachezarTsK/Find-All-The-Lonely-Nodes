
import java.util.ArrayList;
import java.util.List;

public class Solution {

    List<Integer> allLonelyNodes = new ArrayList<>();

    public List<Integer> getLonelyNodes(TreeNode root) {
        collectAllLonelyNodeValues(root, false);
        return allLonelyNodes;
    }

    private void collectAllLonelyNodeValues(TreeNode node, boolean isLonelyNode) {
        if (node == null) {
            return;
        }
        if (isLonelyNode) {
            allLonelyNodes.add(node.val);
        }
        collectAllLonelyNodeValues(node.left, node.right == null);
        collectAllLonelyNodeValues(node.right, node.left == null);
    }
}

/*
Class TreeNode is in-built in the solution file on leetcode.com. 
When running the code on the website, do not include this class.
 */
class TreeNode {

    int val;
    TreeNode left;
    TreeNode right;

    TreeNode() {
    }

    TreeNode(int val) {
        this.val = val;
    }

    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
