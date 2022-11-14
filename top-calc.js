const buttons = document.querySelectorAll('button');
const display = document.querySelector('.displayContainer');

let operators = [];

buttons.forEach(button => button.addEventListener('click', function(){
    
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
        case 'equals':
            break;
    }

    console.log(operators);
}));

const numGrouper = function(arr) {
    let newArr = [];
    let numString = '';

    for(let i = 0; i < arr.length; i++){
        if(i === (arr.length - 1) && !isNaN(arr[i])){
            numString += arr[i];
            newArr.push(numString);
        }
        else if(!isNaN(arr[i])){
            numString += arr[i];
        }
        else if(arr[i] === '-' || arr[i] === '+' || arr[i] === '*' || arr[i] === '/'){
            newArr.push(numString);
            
            numString = '';
            newArr.push(arr[i]);
        }
    }

    return newArr;
};

numGrouper([1,2,'+',3,3,'-',5,6,'/']);

const evaluator = function(arr) {
    let lhs;
    let rhs;
    let result = [];
    let opIndex; //operator index
    let i = 0;

    if(isNaN(arr[-1] || isNaN(arr[0]))){ //if the last or first element in the array is not a number, there was an error
        return;
    }

    while(arr.length > 1){
        let mult = arr.indexOf('*');
        let div = arr.indexOf('/');
        let add = arr.indexOf('+');
        let sub = arr.indexOf('-');

        if(mult < div && mult != -1 || mult != -1 && div === -1){
            console.log(`Step ${i} of * process: ${arr} index of * ${arr.indexOf('*')}`);
            result = [];
            lhs = arr[mult - 1];
            rhs = arr[mult + 1];
            result.push(multiply([parseInt(lhs), parseInt(rhs)]));
            arr.splice((mult - 1), 3, result[0]);
        }
        else if(div < mult && div != -1 || div != -1 && mult === -1){
            console.log(`Step ${i} of / process: ${arr} index of / ${arr.indexOf('/')}`);
            result = [];
            lhs = arr[div - 1];
            rhs = arr[div + 1];
            result.push(divide(parseInt(lhs), parseInt(rhs)));
            arr.splice((div - 1), 3, result[0]);
        }
        else if(add < sub && add != -1 || add != -1 && sub === -1){
            console.log(`Step ${i} of + process: ${arr} index of + ${arr.indexOf('+')}`);
            result = [];
            lhs = arr[add - 1];
            rhs = arr[add + 1];
            result.push(addition(parseInt(lhs), parseInt(rhs)));
            arr.splice((add - 1), 3, result[0]);
        }
        else if(sub < add && sub != -1 || sub != -1 && add == -1){
            console.log(`Step ${i} of - process: ${arr} index of - ${arr.indexOf('-')}`);
            result = [];
            lhs = arr[sub - 1];
            rhs = arr[sub + 1];
            result.push(subtract(parseInt(lhs), parseInt(rhs)));
            arr.splice((sub - 1), 3, result[0]);
        }
    }

    console.log(arr);
};



const addition = function(num1, num2) {
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

const divide = function(num1, num2){
    return num1 / num2;
};

evaluator([3,'+',3,'+',3,'-',1,'*',2,'+',4]);