// Your code here
function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}//saturdayFun 

function mondayWork(activity="go to the office") {
  return `This Monday, I will ${activity}.`
}//mondayWork

let wrapAdjective = function(symb="*") {
  return function(str) {
    return `You are ${symb}${str}${symb}!`;
  }
}//wrapAdjective

let Calculator = {};
Calculator.add = function(num1, num2) {return num1 + num2;};
Calculator.subtract = function(num1, num2) {return num1 - num2;};
Calculator.multiply = function(num1, num2) {return num1 * num2;};
Calculator.divide = function(num1, num2) {return num1 / num2;};

let actionApplyer = function(start, fnArr) {
  return fnArr.reduce(function(total,fn){return fn(total)}, start);
}