// Your code here
// Implement a function called saturdayFun.It should return a String like "This Saturday, I want to ....!" Fill in the ... with the activity that's passed in as the first parameter. If nothing is passed in, default to "roller-skate".

function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

// Implement a function called mondayWork.It should return a String like "This Monday, I will ... ." Fill in the ... with the activity that's passed in as the first parameter. If nothing is passed in, default to "go to the office". 
function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`
}
// Implement a function called wrapAdjective.
// It should return a function
//   This "inner" function should:
//   take a single parameter that should default to "special".Name it however you wish.
// return a String of the form "You are ..." where ...should be the adjective this function received wrapped in visual flair
// It should take as parameter a String that will be used to create visual flair
// You may call the parameter whatever you like, but its default value should be "*"
// Call example: let encouragingPromptFunction = wrapAdjective("!!!")
// Thus a total call should be: wrapAdjective("%")("a dedicated programmer") //=> "You are %a dedicated programmer%!"

function wrapAdjective(adjFlair = "*") {
  return function (adj = "special") {
    return `You are ${adjFlair}${adj}${adjFlair}!`
  }
}

// defines an object called Calculator
// ✓ has a JavaScript Object called Calculator as a local variable
// that has a function called add
// ✓ Calculator.add exists
// ✓ calculates 1 + 3
// that has a function called subtract
// ✓ Calculator.subtract exists
// ✓ calculates 1 - 3
// that has a function called multiply
// ✓ Calculator.multiply exists
// ✓ calculates 1 * 3
// that has a function called divide
// ✓ Calculator.divide exists
// ✓ calculates 10 / 5

const Calculator = {
  add: function (a, b) {
    return a + b
  },
  subtract: function (a, b) {
    return a - b
  },
  multiply: function (a, b) {
    return a * b
  },
  divide: function (a, b) {
    return a / b
  }
}

// Defines a function called actionApplyer
// 1) exists
// receives two arguments: a starting integer and an array of functions
// 2) returns the given starting point, unchanged, when the array is empty
// 3) Given 13, returns 4 after being acted on by several functions

// const startNum = 13
// arrayOfTransforms = [
//   function (a) { return a * 2 },
//   function (a) { return a + 1000 },
//   function (a) { return a % 7 }
// ]

function actionApplyer(startNum, arrayOfFunc) {
  for (let i = 0; i < arrayOfFunc.length; i++) {
    startNum = arrayOfFunc[i](startNum)
  }
  return startNum
}
