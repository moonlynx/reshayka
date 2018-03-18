define(["helpers/stateHelpers",
        "helpers/settingHelpers",
        "helpers/viewHelpers"], 

function(stateHelpers, settingHelpers, viewHelpers) {
  
  function btnClickHandler(e) {
    var value = e.target.value;
     
    if (value === "equal") {
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

  function mnChangeHandler(operator, value) {
    switch (operator) {
      case "+": 
        settingHelpers.setAddMaxNumber(value);
        break;
      case "-": 
        settingHelpers.setSubMaxNumber(value);
        break;
      case "*": 
        settingHelpers.setMulMaxNumber(value);
        break;
      case "/": 
        settingHelpers.setDivMaxNumber(value);
        break;
      default: 
        settingHelpers.setMaxNumber(value);
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
