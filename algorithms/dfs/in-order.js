const inorderTraversal = function(root) {
    let inorder = [];
    
    const traverse = (node) => {
        if (!node) return;
        
				// NEEDS TO BE FINISHED
				if (node.children) {
				}
				inorder.push(node.val);
				for (child in node.children) {
						traverse(child);
				}
    }

    traverse(root);
    return inorder;
}