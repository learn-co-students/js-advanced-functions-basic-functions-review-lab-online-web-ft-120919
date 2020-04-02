// Your code here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(work = "go to the office") {
  return `This Monday, I will ${work}.`
}

function wrapAdjective(flair = '*') {
  return function(adj = 'special') {
    return `You are ${flair}${adj}${flair}!`
  }
}

const Calculator = {}

Calculator.add = function() {
  return 1+3
}

Calculator.subtract = function() {
  return 1-3
}

Calculator.multiply = function() {
  return 1*3
}

Calculator.divide = function() {
  return 10/5
}

function actionApplyer(startingInteger, functionArray) {
  console.log(startingInteger)
  console.log('-------')
  console.log(functionArray)
  if (functionArray.length > 0) {
    return functionArray.reduce(function(total, fn) {
      return fn(total)
    }, startingInteger)
  } else {
    return startingInteger
  }
}
