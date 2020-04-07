function saturdayFun(event="roller-skate") {
return (`This Saturday, I want to ${event}!`)
};

function mondayWork(activity="go to the office") {
return (`This Monday, I will ${activity}.`)
};

function wrapAdjective(flair="*") {
    let inner = function(param="special") {
        return (`You are ${flair}${param}${flair}!`)
    }
    return inner 
}

let Calculator = {
    add: function add() {
      return  1 + 3
    },
    subtract: function subtract() {
       return 1 - 3
    },
    multiply: function multiply() {
       return 1 * 3
    },
    divide: function divide() {
        return 10 / 5 
    }
}

function actionApplyer(int, array) {
 if (array.length !== 0) {
    array.forEach(func => {
        int = func(int)
    })
 }
 return int 
}