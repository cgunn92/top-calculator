const buttons = document.querySelectorAll('button');
const display = document.querySelector('.displayContainer');

let operators = [];

buttons.forEach(button => button.addEventListener('click', function(e){
    
    switch(button.className){
        case 'clear':
            while(operators.length != 0){
                operators.pop()
            }
            break;
        case 'divide':
            operators.push('//');
            break;
        case 'seven':
            operators.push(7);
            break;
        case 'eight':
            operators.push(8);
            break;
        case 'nine':
            operators.push(9);
            break;
        case 'four':
            operators.push(4);
            break;
        case 'five':
            operators.push(5);
            break;
        case 'six':
            operators.push(6);
            break;
        case 'one':
            operators.push(1);
            break;
        case 'two':
            operators.push(2);
            break;
        case 'three':
            operators.push(3);
            break;
        case 'multiply':
            operators.push('*');
            break;
        case 'add':
            operators.push('+');
            break;
        case 'subtract':
            operators.push('-');
            break;
        case 'zero':
            operators.push(0);
            break;
        case 'dot':
            operators.push('.');
            break;
    }

    console.log(operators);
}));

const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	const sumArr = arr.reduce((total, index) => {
    return total + index;
  }, 0);

  return sumArr;
};

const multiply = function(arr) {
  const multiplyArr = arr.reduce((total, index) => {
    return total * index;
  }, 1);

  return multiplyArr;
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
	if(num <= 1){
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

