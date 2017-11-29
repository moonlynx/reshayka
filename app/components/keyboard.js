define(function() {
  function getKeyboardBlock(clickHandle) {

    var KEYBOARD_BLOCK_CLASS_NAME = "keyboard";

    var keyboardBlock = document.createElement("div"),
        btnLabels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "C", "0", "="];

    keyboardBlock.className = KEYBOARD_BLOCK_CLASS_NAME;

    btnLabels.forEach(function(btn) {
      var button = document.createElement("button"),
          btnText = document.createTextNode(btn);

      button.appendChild(btnText);
      button.addEventListener("click", function() {
        clickHandle(this);
      });
      
      keyboardBlock.appendChild(button);
    });

    return keyboardBlock;
  }

  return getKeyboardBlock;
});
