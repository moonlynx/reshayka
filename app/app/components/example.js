define(function() {

  var EXAMPLE_BLOCK_CLASS_NAME = "example";

  var exampleBlock = document.createElement("div"),
      exampleField = document.createElement("span"),
      exampleText = document.createTextNode("");

  exampleBlock.className = EXAMPLE_BLOCK_CLASS_NAME;
  exampleField.appendChild(exampleText);
  exampleBlock.appendChild(exampleField);

  return {
    createBlock: function() {
      return exampleBlock;
    },

    setText: function(text) {
      exampleField.childNodes[0].data = text;
    }
  };
});
