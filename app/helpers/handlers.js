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

  function mnCheckBoxClickHandler(fields, e) {
    console.log(e.target.checked);
    if (e.target.checked) {
      for(var i = 1; i < fields.length; i++) {
        fields[i].disabled = true;        
      }
    } else {
      for(var i = 1; i < fields.length; i++) {
        fields[i].disabled = false;
      }
    }
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
