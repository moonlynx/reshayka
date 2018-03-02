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

    function addMaxNumberHandlers() {
        var maxNumberFields = settings.activeObjects.getMaxNumberFields();

        maxNumberFields.forEach(function(maxNumberField) {
            var operator = maxNumberField.operator;

            maxNumberField.field.addEventListener("change", function(e) {
                var value = e.target.value;                    

                eventHandlers.mnChangeHandler(operator, value);                
            })

        })
    }

    return {
        addHandlers: function() {
            addKeyboardHandlers();
            addMaxNumberCheckboxHandler();
            addMaxNumberHandlers();
        }
    }
});