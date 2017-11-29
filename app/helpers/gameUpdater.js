define(["components/score",
        "components/motiv",
        "components/example",
        "components/answer",
        "models/mathgen-amd",
        "models/gameEnviroment"],

function(score, motiv, example, answer, mathgen, gameenv) {
  
  function getGoodWords() {
    var goodWords = [
          "Молодец!",
          "Супер!",
          "Правильно",
          "Да!",
          "Хорошо считаешь",
          "Математик",
          "Тебе и калькулятор не нужен",
          "Так не честно"
          ],
        index = Math.floor(Math.random() * goodWords.length);

    return goodWords[index];
  }

  function getBadWords() {
    var  badWords = [
          "Нет",
          "Почти",
          "Попробуй еще",
          "Не расстраивайся",
          "В следующий раз получится",
          "Не угадал",
          "Ну, близко"
          ],
        index = Math.floor(Math.random() * badWords.length);

    return badWords[index];
  }

  function checkAnswer() {
    return mathgen.getAnswer(gameenv.var.example) === parseInt(gameenv.var.answer);
  }

  function increaseAnswersCounter(isTrue) {
    if (isTrue) {
      gameenv.var.correctAnswers++;
    } else {
      gameenv.var.incorrectAnswers++;
    }
  }

  function getMotivWords(isTrue) {
    if (isTrue) {
      gameenv.var.motiv = getGoodWords();
    } else {
      gameenv.var.motiv = getBadWords();
    }
  }

  function updateStateGame() {
    increaseAnswersCounter(checkAnswer());
    getMotivWords(checkAnswer());
    gameenv.var.example = mathgen.getExample("+", 20);
    gameenv.var.answer = "";
    updateOutput();
  }

  function updateOutput() {
    score.setCorrectAnswers(gameenv.var.correctAnswers);
    score.setIncorrectAnswers(gameenv.var.incorrectAnswers);
    motiv.setText(gameenv.var.motiv);
    example.setText(gameenv.var.example);
    answer.setText(gameenv.var.answer);
  }

  function updateAnswerText() {
    answer.setText(gameenv.var.answer);
  }

  return {updateStateGame: updateStateGame,
          updateOutput: updateOutput,
          updateAnswerText: updateAnswerText};
});