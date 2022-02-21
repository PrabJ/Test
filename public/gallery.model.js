export class Gallery{
    static createGallery(context){
        return new PMA.UI.Components.Gallery(context, {
            element: "#gallery",
            thumbnailWidth: 200,
            thumbnailHeight: 150,
            mode: "grid",
            showFileName: true,
            showBarcode: true,
            barcodeRotation: 180,
            filenameCallback: function (path) {
                // show the filename without extension
                return path.split('/').pop().split('.')[0];
            }
            ,
            additionalHtmlCallback: function (path) {
                return path.path.split('/').pop().split('.')[0];
            }
        });
    }

}
