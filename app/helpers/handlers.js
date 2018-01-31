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

  function mnCheckBoxClickHandler(fields, target) {
    if (target.checked) {
      for(var i = 1; i < fields.length; i++) {
        fields[i].disabled = true;
        fields[i].value = eSettings.getMaxNumber();
      }
    } else {
      for(var i = 1; i < fields.length; i++) {
        fields[i].disabled = false;
      }

      fields[1].value = eSettings.getAddMaxNumber();
      fields[2].value = eSettings.getSubMaxNumber();
      fields[3].value = eSettings.getMulMaxNumber();
      fields[4].value = eSettings.getDivMaxNumber();
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
