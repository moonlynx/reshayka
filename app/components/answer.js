define(function() {

  var ANSWER_BLOCK_CLASS_NAME = "answer"

  var answerBlock = document.createElement("div"),
      answerField = document.createElement("span"),
      answerText = document.createTextNode("");

  answerBlock.className = ANSWER_BLOCK_CLASS_NAME;
  answerField.appendChild(answerText);
  answerBlock.appendChild(answerField);

  function createBlock() {
    return answerBlock;
  }

  function setText(text) {
    answerField.childNodes[0].data = text;
  }

  return {
          createBlock: createBlock,
          setText: setText
         };
});
