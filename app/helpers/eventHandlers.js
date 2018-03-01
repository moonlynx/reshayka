define(["helpers/stateHelpers",
        "helpers/settingHelpers",
        "helpers/viewHelpers"], 

function(stateHelpers, settingHelpers, viewHelpers) {
  
  function btnClickHandler(e) {
    var value = e.target.childNodes[0].data;
     
    if (value === "=") {
      viewHelpers.updateStateGame();
        
    } else if (value === "C") {
      stateHelpers.clearAnswer();
      viewHelpers.updateAnswerText();

    } else {
      var answer = stateHelpers.getAnswer();
      
      stateHelpers.setAnswer(answer + value);
      viewHelpers.updateAnswerText();
    }
  }

  function mnCheckBoxClickHandler(e) {
    
      settingHelpers.setMaxNumberForAll(e.target.checked);
      viewHelpers.updateMaxNumberFields();
  }

  function opCheckBoxClickHandler(e) {

  }

  function mnChangeHandler(e) {
    var value = e.target.value;
  }

  return {
    btnClickHandler: btnClickHandler,
    mnCheckBoxClickHandler: mnCheckBoxClickHandler
  };
});
