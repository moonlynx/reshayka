define(["helpers/stateEvents",
        "helpers/settingEvents",
        "helpers/gameUpdater"], 

function(eStates, eSettings, updater) {
  
  function clickHandler(button) {
    var value = button.childNodes[0].data;
        
    if (value === "=") {
      updater.updateStateGame();
        
    } else if (value === "C") {
      eState.clearAnswer();
      updater.updateAnswerText();

    } else {
      var answer = eState.getAnswer();
      
      eState.setAnswer(answer + value);
      updater.updateAnswerText();
    }
  }

  return {clickHandler: clickHandler};
});
