define(["helpers/settingEvents"],

function(sEvents) {

  var SETTINGS_CLASS_NAME = "settings",
      SETTINGS_BLOCK_CLASS_NAME = "settings__settings-block",
      TITLE_BLOCK_CLASS_NAME = "settings__settings-title",
      NUMBER_BLOCK_CLASS_NAME = "settings__settings-block__max-number-block",
      MAX_NUMBER_CHECKBOX_CLASS_NAME = "settings__settings-block__max-number-checkbox",
      OPERATORS_BLOCK_CLASS_NAME = "settings__settings-block__operators";

  function getMaxNumberField(label) {

    var numberBlock = document.createElement("div"),
        labelField = document.createElement("span"),
        numberInput = document.createElement("input"),
        labelText = document.createTextNode(label);

    labelField.appendChild(labelText);
    numberInput.type = "text";
    numberInput.maxLength = 3;
    numberBlock.appendChild(labelField);
    numberBlock.appendChild(numberInput);
    numberBlock.className = NUMBER_BLOCK_CLASS_NAME;

    return numberBlock;
  };

  function getMaxNumberCheckBoxField() {

    var checkBoxBlock = document.createElement("div"),
        labelField = document.createElement("span"),
        checkBox = document.createElement("input"),
        labelText = document.createTextNode("Одинаковое число для всех операторов");

    labelField.appendChild(labelText);
    checkBox.type = "checkbox";
    checkBoxBlock.appendChild(labelField);
    checkBoxBlock.appendChild(checkBox);
    checkBoxBlock.className = MAX_NUMBER_CHECKBOX_CLASS_NAME;

    return checkBoxBlock;
  };

  function getSettingsTitle() {

    var titleBlock = document.createElement("div"),
        titleField = document.createElement("span"),
        titleText = document.createTextNode("Настройки");

    titleField.appendChild(titleText);
    titleBlock.appendChild(titleField);
    titleBlock.className = TITLE_BLOCK_CLASS_NAME;

    return titleBlock;
  };

  function getOperatorsBlock() {

    var operatorsBlock = document.createElement("div"),
        titleField = document.createElement("span"),
        titleText = document.createTextNode("Используемые операции:"),
        operators = ["Сложение (+)", "Вычитание (-)", "Умножение (*)", "Деление (/)"];

    titleField.appendChild(titleText);
    operatorsBlock.appendChild(titleField);
    operatorsBlock.className = OPERATORS_BLOCK_CLASS_NAME;

    operators.forEach(function(operator) {

        var field = document.createElement("label"),
            checkbox = document.createElement("input"),
            nameField = document.createElement("span"),
            nameText = document.createTextNode(operator);

        nameField.appendChild(nameText);
        checkbox.type = "checkbox";

        field.appendChild(checkbox);
        field.appendChild(nameField);

        operatorsBlock.appendChild(field);
    });

    return operatorsBlock;
  };

  function getSettingsBlock() {

    var settings = document.createElement("div"),
        settingsBlock = document.createElement("div"),
        operators = ["сложения", "вычитания", "умножения", "деления"];

    settings.className = SETTINGS_CLASS_NAME;
    settingsBlock.className = SETTINGS_BLOCK_CLASS_NAME;

    settingsBlock.appendChild(getOperatorsBlock());
    settingsBlock.appendChild(getMaxNumberField("Максимальное число в примере:"));
    settingsBlock.appendChild(getMaxNumberCheckBoxField());

    operators.forEach(function(operator) {
      var block = getMaxNumberField("Максимальное число для " + operator + ":");
      settingsBlock.appendChild(block);
    });

    settings.appendChild(settingsBlock);
    settings.appendChild(getSettingsTitle());

    return settings;
  };

  return {
    createBlock: getSettingsBlock
  }
});
