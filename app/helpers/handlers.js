define(["helpers/stateEvents",
        "helpers/settingEvents",
        "helpers/gameUpdater"], 

function(eStates, eSettings, updater) {
  
  function btnClickHandler(e) {
    var value = e.target.childNodes[0].data;
    
    console.log(value);  
    if (value === "=") {
      updater.updateStateGame();
        
    } else if (value === "C") {
      eStates.clearAnswer();
      updater.updateAnswerText();

    } else {
      var answer = eStates.getAnswer();
      
      eStates.setAnswer(answer + value);
      updater.updateAnswerText();
    }
  }

  return {btnClickHandler: btnClickHandler};
});
