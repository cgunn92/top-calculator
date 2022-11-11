


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

