define(["models/gameSettings"], 

function(settings) {
  
  function verifyOperator(operator) {
    settings.operators.forEach(function(item) {
      if (item == operator) {
        return false;
      }      
    });

    return true;
  }

  function checkNumber(number) {
    var minNumber = 10,
        maxNumber = 999;
        
    number = ~~number;

    if (number < minNumber) {
      return minNumber;

    } else if (number > maxNumber) {
      return maxNumber;

    } else {
      return number;
    }
  }

  function setMaxNumber(number) {
    settings.maxExampleNumber = checkNumber(number);
  }

  function getMaxNumber() {
    return settings.maxExampleNumber;
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
      
    getMaxNumberForAll: function() {
      return settings.maxNumberForAll;
    },

    setMaxNumberForAll: function(isChecked) {
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