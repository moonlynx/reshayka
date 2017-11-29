define(function(){

  var MOTIV_BLOCK_CLASS_NAME = "motiv";

  var motivBlock = document.createElement("div"),
      motivField = document.createElement("span"),
      motivText = document.createTextNode("");
  
  motivBlock.className = MOTIV_BLOCK_CLASS_NAME;
  motivField.appendChild(motivText);
  motivBlock.appendChild(motivField);

  function createBlock() {
    return motivBlock;
  }

  function setText(text) {
    motivField.childNodes[0].data = text;
  }
  
  return {
          createBlock: createBlock,
          setText: setText
         };
});
