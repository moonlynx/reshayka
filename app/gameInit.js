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

    root.appendChild(settings.createBlock());
    root.appendChild(score.createBlock());
    root.appendChild(motiv.createBlock());
    root.appendChild(example.createBlock());
    root.appendChild(answer.createBlock());
    root.appendChild(keyboard.createBlock());
    
    updater.updateOutput();
});