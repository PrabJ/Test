export class Tree{
    static createTree(context,serverUrl,treeviewElementSelector){
        return new PMA.UI.Components.Tree(context, {
            servers: [
                {
                    name: "PMA.core v2.x",
                    url: serverUrl,
                }
            ],
            element: treeviewElementSelector
        });
    }
}
