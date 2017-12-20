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
    return mathgen.getAnswer(gameenv.example) === parseInt(gameenv.answer);
  }

  function increaseAnswersCounter(isTrue) {
    if (isTrue) {
      gameenv.correctAnswers++;
    } else {
      gameenv.incorrectAnswers++;
    }
  }

  function getMotivWords(isTrue) {
    if (isTrue) {
      gameenv.motiv = getGoodWords();
    } else {
      gameenv.motiv = getBadWords();
    }
  }

  function updateStateGame() {
    increaseAnswersCounter(checkAnswer());
    getMotivWords(checkAnswer());
    gameenv.example = mathgen.getExample("+", 20);
    gameenv.answer = "";
    updateOutput();
  }

  function updateOutput() {
    score.setCorrectAnswers(gameenv.correctAnswers);
    score.setIncorrectAnswers(gameenv.incorrectAnswers);
    motiv.setText(gameenv.motiv);
    example.setText(gameenv.example);
    answer.setText(gameenv.answer);
  }

  function updateAnswerText() {
    answer.setText(gameenv.answer);
  }

  return {updateStateGame: updateStateGame,
          updateOutput: updateOutput,
          updateAnswerText: updateAnswerText};
});