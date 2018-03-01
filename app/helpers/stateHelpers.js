define(["models/mathgen-amd",
        "models/gameState",
        "models/words",
        "helpers/settingHelpers"], 

function(mathgen, gameState, words, settingHelpers) {
  function getGoodWord() {
    var index = Math.floor(Math.random() * words.goodWords.length);

    return words.goodWords[index];
  }

  function getBadWord() {
    var index = Math.floor(Math.random() * words.badWords.length);

    return words.badWords[index];
  }

  function checkAnswer() {
    return mathgen.getAnswer(gameState.example) === Number(gameState.answer);
  }

  return {
    increaseAnswersCounter: function() {
      if (checkAnswer()) {
        gameState.correctAnswers++;
      } else {
        gameState.incorrectAnswers++;
      }
    },
  
    getCorrectAnswers: function() {
      return gameState.correctAnswers;
    },
  
    getIncorrectAnswers: function() {
      return gameState.incorrectAnswers;
    },
  
    setMotiv: function() {
      if (checkAnswer()) {
        gameState.motiv = getGoodWord();
      } else {
        gameState.motiv = getBadWord();
      }
    },
  
    getMotiv: function() {
      return gameState.motiv;
    },
  
    newExample: function() {
      var operators = settingHelpers.getOperators(),
          operatorIndex = Math.floor(Math.random() * operators.length),
          operator = operators[operatorIndex],
          number;
  
      if (settingHelpers.getMaxNumberForAll()) {
        number = settingHelpers.getMaxNumber();
  
      } else {
        switch(operator) {
          case "+":
            number = settingHelpers.getAddMaxNumber();
            break;
          case "-":
            number = settingHelpers.getSubMaxNumber();
            break;
          case "*":
            number = settingHelpers.getMulMaxNumber();
            break;
          case "/":
            number = settingHelpers.getDivMaxNumber();
            break;
          default:
            number = settingHelpers.getMaxNumber();
            break;
        }
      }
  
      gameState.example = mathgen.getExample(operator, number);
    },
  
    getExample: function() {
      return gameState.example;
    },
  
    clearAnswer: function() {
      gameState.answer = "";
    },
  
    getAnswer: function() {
      return gameState.answer;
    },
  
    setAnswer: function(answer) {
      gameState.answer = answer;
    }
  }  
});