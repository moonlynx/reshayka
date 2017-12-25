require(["components/settings",
        "components/score",
        "components/motiv",
        "components/example",
        "components/answer",
        "components/keyboard",
        "helpers/gameUpdater",
        "models/config"],

function(settings, score, motiv, example, answer, keyboard, updater, conf) {

    var root = document.querySelectorAll("#" + conf.rootId)[0];

    [settings, score, motiv, example, answer, keyboard].forEach(function(block) {
        root.appendChild(block.createBlock());
    });
    
    updater.updateOutput();
});
