define(["models/mathgen-amd"], 

function(mathgen){
    var GameVariables = {
        correctAnswers: 0,
        incorrectAnswers: 0,
        motiv: "",
        example: mathgen.getExample("+", 10),
        answer: ""
    };

    var GameSettings = {

    };

    return {
            var: GameVariables,
            settings: GameSettings
    }
});
