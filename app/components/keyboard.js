define(["helpers/keyboardHandlers"],
  
function(kbHandlers) {

  var KEYBOARD_BLOCK_CLASS_NAME = "keyboard",
      RED_BUTTON_CLASS_NAME = "keyboard__button_red",
      RED_BUTTON_LABEL = "C";

  var keyboardBlock = document.createElement("div"),
      btnLabels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", RED_BUTTON_LABEL, "0", "="];

  keyboardBlock.className = KEYBOARD_BLOCK_CLASS_NAME;

  btnLabels.forEach(function(label) {
    var button = document.createElement("button"),
        btnText = document.createTextNode(label);

    button.appendChild(btnText);
    button.addEventListener("click", function() {
      kbHandlers.clickHandler(this);
    });
    
    if (label == RED_BUTTON_LABEL) {
      button.className = RED_BUTTON_CLASS_NAME;
    }

    keyboardBlock.appendChild(button);
  });

  return {
    createBlock: function() {
      return keyboardBlock;
    }
  };
});
