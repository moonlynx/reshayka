define(["components/settings",
        "components/keyboard",
        "helpers/viewHelpers",
        "helpers/eventHandlers"],

function(settings, keyboard, viewHelpers, eventHandlers) {

    function addKeyboardHandlers() {
        var kbButtons = keyboard.activeObjects.getButtons();

        kbButtons.forEach(function(button){
            button.addEventListener("click", eventHandlers.btnClickHandler);
        });       
    }

    function addMaxNumberCheckboxHandler() {
        var maxNumberCheckbox = settings.activeObjects.getMaxNumberCheckBox();

        maxNumberCheckbox.addEventListener("click", eventHandlers.mnCheckBoxClickHandler);
    }

    return {
        addHandlers: function() {
            addKeyboardHandlers();
            addMaxNumberCheckboxHandler();
        }
    }
});