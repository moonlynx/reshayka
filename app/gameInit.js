require(["helpers/viewHelpers",
         "helpers/eventHelpers",
         "models/config"],

function(viewHelpers, eventHelpers, conf) {

    var root = document.querySelectorAll("#" + conf.rootId)[0];
    
    viewHelpers.addComponents(root);
    viewHelpers.addComponentsData();
    viewHelpers.updateMaxNumberFields();
    eventHelpers.addHandlers();      
});
