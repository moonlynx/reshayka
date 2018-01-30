require(["components/settings",
        "components/score",
        "components/motiv",
        "components/example",
        "components/answer",
        "components/keyboard",
        "helpers/gameUpdater",
        "helpers/handlers",
        "models/config"],

function(settings, score, motiv, example, answer, keyboard, updater, handlers, conf) {

    var root = document.querySelectorAll("#" + conf.rootId)[0],
        kbButtons = keyboard.activeObjects.getButtons(),
        operatorFields = settings.activeObjects.getOperatorFields(),
        maxNumberFields = settings.activeObjects.getMaxNumberFields(),
        checkbox = settings.activeObjects.getMaxNumberCheckBox();

    [settings, score, motiv, example, answer, keyboard].forEach(function(block) {
        root.appendChild(block.createBlock());
    });

    kbButtons.forEach(function(button){
        button.addEventListener("click", handlers.btnClickHandler);
    });
        
    updater.updateOutput();
});
