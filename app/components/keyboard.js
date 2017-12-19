define(["helpers/kbEvents"],
  
function(kbEvents) {

  var KEYBOARD_BLOCK_CLASS_NAME = "keyboard";

  var keyboardBlock = document.createElement("div"),
      btnLabels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "C", "0", "="];

  keyboardBlock.className = KEYBOARD_BLOCK_CLASS_NAME;

  btnLabels.forEach(function(label) {
    var button = document.createElement("button"),
        btnText = document.createTextNode(label);

    button.appendChild(btnText);
    button.addEventListener("click", function() {
      kbEvents.clickHandle(this);
    });
      
    keyboardBlock.appendChild(button);
  });

  function createBlock() {
    return keyboardBlock;
  }

  return {createBlock: createBlock};
});
