
using System;

public class Solution
{
    private IList<int> AllLonelyNodes = new List<int>();

    public IList<int> GetLonelyNodes(TreeNode root)
    {
        CollectAllLonelyNodeValues(root, false);
        return AllLonelyNodes;
    }

    private void CollectAllLonelyNodeValues(TreeNode node, bool isLonelyNode)
    {
        if (node == null)
        {
            return;
        }
        if (isLonelyNode)
        {
            AllLonelyNodes.Add(node.val);
        }

        CollectAllLonelyNodeValues(node.left, node.right == null);
        CollectAllLonelyNodeValues(node.right, node.left == null);
    }
}

/*
Class TreeNode is in-built in the solution file on leetcode.com. 
When running the code on the website, do not include this class.
 */
public class TreeNode
{
    public int val;
    public TreeNode left;
    public TreeNode right;

    public TreeNode(int val = 0, TreeNode left = null, TreeNode right = null)
    {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
