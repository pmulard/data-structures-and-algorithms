const preorderTraversal = function(root) {
    let preorder = [];
    
    const traverse = (node) => {
        if (!node) return;

        preorder.push(node.val);
				for (child in node.children) {
						traverse(child);
				}
    }

    traverse(root);   
    return preorder;
}