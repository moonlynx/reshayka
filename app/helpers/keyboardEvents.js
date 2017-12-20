define(["models/gameEnviroment",
        "helpers/gameUpdater"], 

function(gameenv, updater) {
  
  function clickHandle(button) {
    var value = button.childNodes[0].data;
        
    if (value === "=") {
      updater.updateStateGame();
        
    } else if (value === "C") {
      gameenv.answer = "";
      updater.updateAnswerText();

    } else {
      gameenv.answer += value;
      updater.updateAnswerText();
    }
  }

  return {clickHandle: clickHandle};
});
