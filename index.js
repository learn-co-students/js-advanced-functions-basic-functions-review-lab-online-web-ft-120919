// Your code here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flair = "*") {
  return function(adjective = "special") {
    return `You are ${flair}${adjective}${flair}!`;
  }
}

const Calculator = {
  add: function(num1, num2) {return num1 + num2},
  subtract: function(num1, num2) {return num1 - num2},
  multiply: function(num1, num2) {return num1 * num2},
  divide: function(num1, num2) { return num1 / num2}
}

function actionApplyer(start, functArray) {
  if(functArray.length === 0) {
    return start;
  } else {
    return functArray.reduce((currentValue, currentAction) => currentAction(currentValue), start);
  }

}