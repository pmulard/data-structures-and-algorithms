const postorderTraversal = function(root) {
    let postorder = [];
    
    const traverse = (node) => {
        if (!node) return;

				for (child in node.children) {
						traverse(child);
				}
				postorder.push(node.val);
    }

    traverse(root);
    return postorder;
}