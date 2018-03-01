﻿define(["components/settings",
        "components/score",
        "components/motiv",
        "components/example",
        "components/answer",
        "components/keyboard",
        "helpers/stateHelpers",
        "helpers/settingHelpers"],

function(settings, score, motiv, example, answer, keyboard, stateHelpers, settingHelpers) {

  function addComponents(root) {
    [settings, score, motiv, example, answer, keyboard].forEach(function(block) {
      root.appendChild(block.createBlock());
    });
  }

  function addComponentsData() {
    var operatorFields = settings.activeObjects.getOperatorFields(),
        maxNumberFields = settings.activeObjects.getMaxNumberFields(),
        operators = settingHelpers.getOperators();
        
    score.setCorrectAnswers(stateHelpers.getCorrectAnswers());
    score.setIncorrectAnswers(stateHelpers.getIncorrectAnswers());
    
    maxNumberFields[0].value = settingHelpers.getMaxNumber();
    maxNumberFields[1].value = settingHelpers.getAddMaxNumber();
    maxNumberFields[2].value = settingHelpers.getSubMaxNumber();
    maxNumberFields[3].value = settingHelpers.getMulMaxNumber();
    maxNumberFields[4].value = settingHelpers.getDivMaxNumber();

    operatorFields.forEach(function(item) {
      if (operators.indexOf(item.operator) != -1) {
          item.field.checked = true;
      }
    });

    stateHelpers.newExample();
    example.setText(stateHelpers.getExample());
    updateMaxNumberFields();
  }

  function updateMaxNumberFields() {
    var mnCheckBox = settings.activeObjects.getMaxNumberCheckBox(),
        fields = settings.activeObjects.getMaxNumberFields();

    if (settingHelpers.getMaxNumberForAll()) {
      fields[0].disabled = false;

      for(var i = 1; i < fields.length; i++) {
        fields[i].disabled = true;
        fields[i].value = settingHelpers.getMaxNumber();
      }
    } else {
      for(var i = 1; i < fields.length; i++) {
        fields[i].disabled = false;
      }

      fields[0].disabled = true;
      fields[1].value = settingHelpers.getAddMaxNumber();
      fields[2].value = settingHelpers.getSubMaxNumber();
      fields[3].value = settingHelpers.getMulMaxNumber();
      fields[4].value = settingHelpers.getDivMaxNumber();      
    }
  }

  function updateStateGame() {
    stateHelpers.increaseAnswersCounter();
    stateHelpers.setMotiv();
    stateHelpers.newExample();
    stateHelpers.clearAnswer();
    updateOutput();
  }

  function updateOutput() {
    score.setCorrectAnswers(stateHelpers.getCorrectAnswers());
    score.setIncorrectAnswers(stateHelpers.getIncorrectAnswers());
    motiv.setText(stateHelpers.getMotiv());
    example.setText(stateHelpers.getExample());
    answer.setText(stateHelpers.getAnswer());
  }

  function updateAnswerText() {
    answer.setText(stateHelpers.getAnswer());
  }

  return {
    updateStateGame: updateStateGame,
    updateOutput: updateOutput,
    updateAnswerText: updateAnswerText,
    addComponents: addComponents,
    addComponentsData: addComponentsData,
    updateMaxNumberFields: updateMaxNumberFields
  };
});