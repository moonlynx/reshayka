define(["models/mathgen-amd"], 

function(mathgen){
    return {
        correctAnswers: 0,
        incorrectAnswers: 0,
        motiv: "",
        example: mathgen.getExample("+", 10),
        answer: ""
    };
});
