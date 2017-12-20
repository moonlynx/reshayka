define(["models/mathgen-amd",
        "models/gameState",
        "models/words",
        "helpers/settingEvents"], 

function(mathgen, gState, words, sEvents) {
  function getGoodWord() {
    var index = Math.floor(Math.random() * words.goodWords.length);

    return words.goodWords[index];
  }

  function getBadWord() {
    var index = Math.floor(Math.random() * words.badWords.length);

    return words.badWords[index];
  }

  function checkAnswer() {
    return mathgen.getAnswer(gState.example) === Number(gState.answer);
  }

  return {
    increaseAnswersCounter: function() {
      if (checkAnswer()) {
        gState.correctAnswers++;
      } else {
        gState.incorrectAnswers++;
      }
    },
  
    getCorrectAnswers: function() {
      return gState.correctAnswers;
    },
  
    getIncorrectAnswers: function() {
      return gState.incorrectAnswers;
    },
  
    setMotiv: function() {
      if (checkAnswer()) {
        gState.motiv = getGoodWord();
      } else {
        gState.motiv = getBadWord();
      }
    },
  
    getMotiv: function() {
      return gState.motiv;
    },
  
    newExample: function() {
      var operators = sEvents.getOperators(),
          operatorIndex = Math.floor(Math.random() * operators.length),
          operator = operators[operatorIndex],
          number;
  
      if (sEvents.getAllNumCheckbox()) {
        number = sEvents.getMaxNumber();
  
      } else {
        switch(operator) {
          case '+':
            number = sEvents.getAddMaxNumber();
            break;
          case '-':
            number = sEvents.getSubMaxNumber();
            break;
          case '*':
            number = sEvents.getMulMaxNumber();
            break;
          case '/':
            number = sEvents.getDivMaxNumber();
            break;
          default:
            number = sEvents.getMaxNumber();
            break;
        }
      }
  
      gState.example = mathgen.getExample(operator, number);
    },
  
    getExample: function() {
      return gState.example;
    },
  
    clearAnswer: function() {
      gState.answer = "";
    },
  
    getAnswer: function() {
      return gState.answer;
    },
  
    setAnswer: function(answer) {
      gState.answer = answer;
    }
  }  
});