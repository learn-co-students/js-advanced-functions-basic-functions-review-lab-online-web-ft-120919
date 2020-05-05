
function saturdayFun(activity = 'roller-skate') {
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(work = 'go to the office') {
  return `This Monday, I will ${work}.`
}

function wrapAdjective(wrapper="*") {
  return (adjective="special") => `You are ${wrapper}${adjective}${wrapper}!`
}

const Calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b
}

function actionApplyer(int, functions) {
  return functions.reduce((a, c) => a = c(a), int)
}