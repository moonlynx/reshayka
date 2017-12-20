define(["components/score",
        "components/motiv",
        "components/example",
        "components/answer",
        "helpers/stateEvents"],

function(score, motiv, example, answer, sEvents) {
    
  function updateStateGame() {
    sEvents.increaseAnswersCounter();
    sEvents.setMotiv();
    sEvents.newExample();
    sEvents.clearAnswer();
    updateOutput();
  }

  function updateOutput() {
    score.setCorrectAnswers(sEvents.getCorrectAnswers());
    score.setIncorrectAnswers(sEvents.getIncorrectAnswers());
    motiv.setText(sEvents.getMotiv());
    example.setText(sEvents.getExample());
    answer.setText(sEvents.getAnswer());
  }

  function updateAnswerText() {
    answer.setText(sEvents.getAnswer());
  }

  return {updateStateGame: updateStateGame,
          updateOutput: updateOutput,
          updateAnswerText: updateAnswerText};
});