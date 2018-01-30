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

    function fillGameBoard() {
        var root = document.querySelectorAll("#" + conf.rootId)[0];

        [settings, score, motiv, example, answer, keyboard].forEach(function(block) {
            root.appendChild(block.createBlock());
        });
    }
    
    function addGameLogic() {
        var checkbox = settings.activeObjects.getMaxNumberCheckBox(),
            kbButtons = keyboard.activeObjects.getButtons(),
            operatorFields = settings.activeObjects.getOperatorFields(),
            maxNumberFields = settings.activeObjects.getMaxNumberFields();

        kbButtons.forEach(function(button){
            button.addEventListener("click", handlers.btnClickHandler);
        });
        
        checkbox.addEventListener("click", function(e) {
            handlers.mnCheckBoxClickHandler(maxNumberFields, e);
        });
    }

    function init() {
        var newGame = true;

        fillGameBoard();
        addGameLogic();
        updater.updateOutput();
    }    
        
    init();
});
