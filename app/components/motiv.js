define(function(){

  var MOTIV_BLOCK_CLASS_NAME = "motiv";

  var motivBlock = document.createElement("div"),
      motivField = document.createElement("span"),
      motivText = document.createTextNode("");
  
  motivBlock.className = MOTIV_BLOCK_CLASS_NAME;
  motivField.appendChild(motivText);
  motivBlock.appendChild(motivField);

  return {
    createBlock: function() {
      return motivBlock;
    },

    setText: function(text) {
      motivField.childNodes[0].data = text;
    }
  };
});
