// Your code here

function saturdayFun(activity="roller-skate") {
   return `This Saturday, I want to ${activity}!`
  }

  function mondayWork(activity="go to the office") {
      return `This Monday, I will ${activity}.`
  }

  function wrapAdjective(symbol="*") {
      return function(param="special"){
          return `You are ${symbol}${param}${symbol}!`
      }
  }

  const Calculator = {
      add: function add(num1, num2) {
          return num1 + num2
      },
      subtract: function subtract(num1, num2) {
          return num1 - num2
      },
      multiply: function multiply(num1, num2) {
          return num1 * num2
      },
      divide: function divide(num1, num2) {
          return num1/num2
      }
  }

  function actionApplyer(startingNum, array) {
      let num = startingNum 
      array.forEach(element => {
          let newValue = element(num)
          num = newValue
      });
      return num
  }