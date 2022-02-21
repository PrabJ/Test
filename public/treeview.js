import {Tree} from './tree.model.js'
import {Gallery} from './gallery.model.js'
import {ViewPort} from './viewport.model.js'
import {showModal} from './effects.js';

// Initial declarations
var serverUrl = "https://host.pathomation.com/pma.core.2/";
var serverUsername = "PMA_UI_demo";
var serverPassword = "PMA_UI_demo";
var treeviewElementSelector = "#treeview";
var viewerElementSelector = "#viewer";
var caller = "DemoPortal";

var sampleImage = [];

jQuery(function () {

    // Create a context
    var context = new PMA.UI.Components.Context({ caller: caller });

    // Add an autologin authentication provider
    console.log(new PMA.UI.Authentication.AutoLogin(context, [{ serverUrl: serverUrl, username: serverUsername, password: serverPassword }]));
    //new PMA.UI.Authentication.PromptLogin(context);simple express login page

    // create a gallery that will display the contents of a directory
    var gallery = Gallery.createGallery(context);
    console.log('Printing some info about the gallery');
    console.log(gallery);

    // listen for the slide selected event to load the selected image when clicked
    gallery.listen(PMA.UI.Components.Events.SlideSelected, function (args) {
            ViewPort.createViewPort(args,caller,viewerElementSelector,[serverUrl],serverUsername,serverPassword);
            showModal();
    });

    // Create a tree view that will display the contents of PMA.core servers
    var tree = Tree.createTree(context,serverUrl,treeviewElementSelector);

    // Listen for the slide selected event by the tree view
    tree.listen(PMA.UI.Components.Events.SlideSelected, function (args) {
        console.log("Slide selected");
        sampleImage.push(args);
        gallery.loadSlides(sampleImage, () => {console.log('Gallery loaded')}); 
    }); 

    // Listen for the directory selected event by the tree view
    tree.listen(PMA.UI.Components.Events.DirectorySelected, function (args) {
        console.log("Directory selected");
        sampleImage = []
        gallery.loadSlides(sampleImage);

    });

    // Listen for the server selected event by the tree view
    tree.listen(PMA.UI.Components.Events.ServerSelected, function (args) {

    });

    // Listen for the multiple selected event by the tree view
    tree.listen(PMA.UI.Components.Events.MultiSelectionChanged, function (args) {

    });

    // Listen for the double click event by the tree view
    tree.listen(PMA.UI.Components.Events.TreeNodeDoubleClicked, function (args) {
        ViewPort.createViewPort(args,caller,viewerElementSelector,[serverUrl],serverUsername,serverPassword);
        showModal();
    });

    // Listen for the server expanded event by the tree view
    tree.listen(PMA.UI.Components.Events.ServerExpanded, function (args) {

    });

    // Listen for the directory expanded event by the tree view
    tree.listen(PMA.UI.Components.Events.DirectoryExpanded, function (args) {

    });

    // Listen for the search finished event by the tree view
    tree.listen(PMA.UI.Components.Events.SearchFinished, function (args) {

    });

    // Listen for the search failed event by the tree view
    tree.listen(PMA.UI.Components.Events.SearchFailed, function (args) {
        
    });
});
