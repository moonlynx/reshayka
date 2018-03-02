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

  function opCheckBoxClickHandler(operator, isChecked) {
    var LAST_OPERATOR = "+";

    if (isChecked) {
      settingHelpers.addOperator(operator);
    } else {
      settingHelpers.deleteOperator(operator);
    }

    var operators = settingHelpers.getOperators();

    if (operators.length < 1) {
      settingHelpers.addOperator(LAST_OPERATOR);
      viewHelpers.updateOperatorsCBs();
    }
  }

  function mnChangeHandler(operator, target) {
    switch (operator) {
      case "+": 
        settingHelpers.setAddMaxNumber(target.value);
        
        if (target.value != settingHelpers.getAddMaxNumber()) {
          target.value = settingHelpers.getAddMaxNumber();
        }
        
        break;
      
      case "-": 
        settingHelpers.setSubMaxNumber(target.value);
        
        if (target.value != settingHelpers.getSubMaxNumber()) {
          target.value = settingHelpers.getSubMaxNumber();
        }
        
        break;

      case "*": 
        settingHelpers.setMulMaxNumber(target.value);
        
        if (target.value != settingHelpers.getMulMaxNumber()) {
          target.value = settingHelpers.getMulMaxNumber();
        }
        
        break;

      case "/": 
        settingHelpers.setDivMaxNumber(target.value);
        
        if (target.value != settingHelpers.getMulMaxNumber()) {
          target.value = settingHelpers.getMulMaxNumber();
        }
        
        break;

      default: 
        settingHelpers.setMaxNumber(target.value);
        viewHelpers.updateMaxNumberFields();
        break;
    }
  }

  return {
    btnClickHandler: btnClickHandler,
    mnCheckBoxClickHandler: mnCheckBoxClickHandler,
    mnChangeHandler: mnChangeHandler,
    opCheckBoxClickHandler:opCheckBoxClickHandler
  };
});
