// Your code here
function saturdayFun(string = "roller-skate") {
    return `This Saturday, I want to ${string}!`
}

function mondayWork(string = "go to the office") {
    return `This Monday, I will ${string}.`
}

function wrapAdjective(flair = "*") {
    return function(compliment = "special") {
        return `You are ${flair}${compliment}${flair}!`
    }
}

const Calculator = {
    add: function(num1, num2) {
        return num1 + num2
    },
    subtract: function(num1, num2) {
        return num1 - num2
    },
    multiply: function(num1, num2) {
        return num1 * num2
    },
    divide: function(num1, num2) {
        return num1 / num2
    }
}

function actionApplyer(startNum, funcArray) {
    for (let i = 0; i < funcArray.length; i++) {
        startNum = funcArray[i](startNum)
    }

    return startNum
}