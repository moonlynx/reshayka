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
                eventHandlers.mnChangeHandler(operator, e.target);                
            })

        })
    }

    function addOperCheckBoxHandlers() {
        var operators = settings.activeObjects.getOperatorsFields();

        operators.forEach(function(operator) {
            operator.field.addEventListener("click", function(e) {
                var isChecked = e.target.checked;

                eventHandlers.opCheckBoxClickHandler(operator.operator, isChecked);
            })
        })
       
    } 

    return {
        addHandlers: function() {
            addKeyboardHandlers();
            addMaxNumberCheckboxHandler();
            addMaxNumberHandlers();
            addOperCheckBoxHandlers();
        }
    }
});