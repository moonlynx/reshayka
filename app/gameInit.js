require(["components/settings",
        "components/score",
        "components/motiv",
        "components/example",
        "components/answer",
        "components/keyboard",
        "helpers/stateEvents",
        "helpers/settingEvents",
        "helpers/handlers",
        "models/config"],

function(settings, score, motiv, example, answer, keyboard, stateEvents, settingEvents, handlers, conf) {

    var root = document.querySelectorAll("#" + conf.rootId)[0],
        mnCheckBox,
        kbButtons,
        operatorFields,
        maxNumberFields;

    [settings, score, motiv, example, answer, keyboard].forEach(function(block) {
        root.appendChild(block.createBlock());
    });

    mnCheckBox = settings.activeObjects.getMaxNumberCheckBox(),
    kbButtons = keyboard.activeObjects.getButtons(),
    operatorFields = settings.activeObjects.getOperatorFields(),
    maxNumberFields = settings.activeObjects.getMaxNumberFields();

    kbButtons.forEach(function(button){
        button.addEventListener("click", handlers.btnClickHandler);
    });
        
    mnCheckBox.addEventListener("click", function(e) {
        handlers.mnCheckBoxClickHandler(maxNumberFields, e.target);
    });

    score.setCorrectAnswers(stateEvents.getCorrectAnswers());
    score.setIncorrectAnswers(stateEvents.getIncorrectAnswers());

    maxNumberFields[0].value = settingEvents.getMaxNumber();
    maxNumberFields[1].value = settingEvents.getAddMaxNumber();
    maxNumberFields[2].value = settingEvents.getSubMaxNumber();
    maxNumberFields[3].value = settingEvents.getMulMaxNumber();
    maxNumberFields[4].value = settingEvents.getDivMaxNumber();    
});
