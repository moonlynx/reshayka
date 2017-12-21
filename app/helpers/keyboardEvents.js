define(["helpers/stateEvents",
        "helpers/gameUpdater"], 

function(sEvents, updater) {
  
  function clickHandle(button) {
    var value = button.childNodes[0].data;
        
    if (value === "=") {
      updater.updateStateGame();
        
    } else if (value === "C") {
      sEvents.clearAnswer();
      updater.updateAnswerText();

    } else {
      var answer = sEvents.getAnswer();
      
      sEvents.setAnswer(answer + value);
      updater.updateAnswerText();
    }
  }

  return {clickHandle: clickHandle};
});