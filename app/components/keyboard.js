define(function() {

  var KEYBOARD_BLOCK_CLASS_NAME = "keyboard",
      BUTTON_CLASS_NAME_PREFIX = "keyboard__button__",
      RED_BUTTON_LABEL = "C";

  var keyboardBlock = document.createElement("div"),
      btnLabels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", RED_BUTTON_LABEL, "0", "equal"];
      
  var activeObjects = (function() {
    var buttons = [];

    return {
      addButton: function(button) {
        buttons.push(button);
      },
      getButtons: function() {
        return buttons;
      }
    }
  })();

  keyboardBlock.className = KEYBOARD_BLOCK_CLASS_NAME;

  btnLabels.forEach(function(label) {
    var button = document.createElement("button");
        // btnText = document.createTextNode(label);

    activeObjects.addButton(button);
    //button.appendChild(btnText);
        
    button.className = BUTTON_CLASS_NAME_PREFIX + label;
    button.value = label;
    
    keyboardBlock.appendChild(button);
  });

  return {
    createBlock: function() {
      return keyboardBlock;
    },
    activeObjects: {
      getButtons: activeObjects.getButtons
    }
  };
});
