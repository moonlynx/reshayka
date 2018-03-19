define(function(){

	function getNumber(maxNumber) {
		return Math.floor(Math.random() * maxNumber + 1);
	}

	function getDivNumber(number, maxNumber) {
		var numbers = [];

		for (var i = number; i <= maxNumber; i += number) {
			numbers.push(i);
		}

		return numbers[Math.floor(Math.random() * numbers.length)];
	}

	function getOperator(operators) {
		var operNumber = Math.floor(Math.random() * operators.length);
		return operators[operNumber];
	}

	function getExample(operator, maxNumber) {

		var firstNumber,
			secondNumber;

		switch(operator) {
			case "+":
				firstNumber = getNumber(maxNumber);
				secondNumber = getNumber(maxNumber);
				break;
			case "-":
				firstNumber = getNumber(maxNumber);
				secondNumber = getNumber(firstNumber);
				break;
			case "*":
				firstNumber = getNumber(maxNumber);
				secondNumber = getNumber(maxNumber);
				break;
			case "/":
				secondNumber = getNumber(Math.floor(maxNumber / 2));
				firstNumber = getDivNumber(secondNumber, maxNumber);
				break;
			default:
				return;
		}

		return firstNumber + " " + operator + " " + secondNumber;
	}

	function getAnswer(example) {
		var arr = example.split(" ");

		switch(arr[1]) {
			case "+":
				return parseInt(arr[0]) + parseInt(arr[2]);
			case "-":
				return parseInt(arr[0]) - parseInt(arr[2]);
			case "*":
				return parseInt(arr[0]) * parseInt(arr[2]);
			case "/":
				return parseInt(arr[0]) / parseInt(arr[2]);
			default:
				return NaN;
		}
	}

	return {
		getExample : getExample,
		getAnswer  : getAnswer
	}
});
