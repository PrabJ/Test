export class ViewPort{
    static createViewPort(args,caller,viewerElementSelector,[serverUrl],serverUsername,serverPassword){
        return new PMA.UI.View.Viewport(
            // Viewport parameters
            {
            caller: caller,
            element: viewerElementSelector,
            image: args.path,
            serverUrls: [serverUrl],
            username: serverUsername,
            password: serverPassword,
            },
            // Success callback function
            function () {
                console.log("Success! Viewport initialized successfully.");
                },
            // Failure callback function
            function () {
                console.log("Error! Viewport failed to initialize properly.");
            }
            );
    }

}
