define(["models/gameSettings"], 

function(settings) {
  var minNumber = 0,
      maxNumber = 999;

  function verifyOperator(operator) {
    settings.operators.forEach(function(item) {
      if (item == operator) {
        return false;
      }      
    });

    return true;
  }

  function checkNumber(number) {
    if (number < minNumber) {
      return minNumber;

    } else if (number > maxNumber) {
      return maxNumber;

    } else {
      return number;
    }
  }

  return {
    getOperators: function() {
      return settings.operators;
    },
     
    addOperator: function(operator) {
      if (verifyOperator(operator)) {
        settings.operators.push(operator);
      }
    },
      
    deleteOperator: function(operator) {
      var index = settings.operators.indexOf(operator);

      if (index != -1) {
        settings.operators.splice(index, 1);
      }
    },
     
    getMaxNumber: function() {
      return settings.maxExampleNumber;
    },
  
    setMaxNumber: function(number) {
      settings.maxExampleNumber = checkNumber(number);
    },
      
    getAllNumCheckbox: function() {
      return settings.maxNumberForAll;
    },

    setAllNumCheckbox: function(isChecked) {
      settings.maxNumberForAll = Boolean(isChecked);
    },
  
    getAddMaxNumber: function() {
      return settings.addMaxNumber;
    },
  
    setAddMaxNumber: function(number) {
      settings.addMaxNumber = checkNumber(number);
    },
  
    getSubMaxNumber: function() {
      return settings.subMaxNumber;
    },
      
    setSubMaxNumber: function(number) {
      settings.subMaxNumber = checkNumber(number);
    },
  
    getMulMaxNumber: function() {
      return settings.mulMaxNumber;
    },
      
    setMulMaxNumber: function(number) {
      settings.mulMaxNumber = checkNumber(number);
    },
  
    getDivMaxNumber: function() {
      return settings.divMaxNumber;
    },
      
    setDivMaxNumber: function(number) {
      settings.divMaxNumber = checkNumber(number);
    }
  }  
});