define(function() {

  var SCORE_DIVIDER = ":",
      SCORE_BLOCK_CLASS_NAME = "score",
      CORRECT_ANSWERS_CLASS_NAME = "score__correct",
      INCORRECT_ANSWERS_CLASS_NAME = "score__incorrect";

  var scoreBlock = document.createElement("div"),
      correctAnswersField = document.createElement("span"),
      incorrectAnswersField = document.createElement("span"),
      dividerField = document.createElement("span"),
      correctAnswersText = document.createTextNode(""),
      incorrectAnswersText = document.createTextNode(""),
      dividerText = document.createTextNode(SCORE_DIVIDER);

  scoreBlock.className = SCORE_BLOCK_CLASS_NAME;
  correctAnswersField.className = CORRECT_ANSWERS_CLASS_NAME;
  incorrectAnswersField.className = INCORRECT_ANSWERS_CLASS_NAME;
    
  correctAnswersField.appendChild(correctAnswersText);
  incorrectAnswersField.appendChild(incorrectAnswersText);
  dividerField.appendChild(dividerText);

  scoreBlock.appendChild(correctAnswersField);
  scoreBlock.appendChild(dividerField);
  scoreBlock.appendChild(incorrectAnswersField);

  function createBlock() {
    return scoreBlock;
  }

  function setCorrectAnswers(correctAnswers) {
    correctAnswersField.childNodes[0].data = correctAnswers;
  }

  function setIncorrectAnswers(incorrectAnswers) {
    incorrectAnswersField.childNodes[0].data = incorrectAnswers;
  }

  return {
          createBlock: createBlock,
          setCorrectAnswers: setCorrectAnswers,
          setIncorrectAnswers: setIncorrectAnswers
         };
});
