
using namespace std;

/*
Struct TreeNode is in-built in the solution file on leetcode.com.
When running the code on the website, do not include this struct.
 */
struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;

    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode* left, TreeNode* right) : val(x), left(left), right(right) {}
};

class Solution {

    vector<int> allLonelyNodes;

public:
    vector<int> getLonelyNodes(TreeNode* root) {
        collectAllLonelyNodeValues(root, false);
        return allLonelyNodes;
    }

private:
    void collectAllLonelyNodeValues(TreeNode* node, bool isLonelyNode) {
        if (node == nullptr) {
            return;
        }
        if (isLonelyNode) {
            allLonelyNodes.push_back(node->val);
        }
        collectAllLonelyNodeValues(node->left, node->right == nullptr);
        collectAllLonelyNodeValues(node->right, node->left == nullptr);
    }
};
