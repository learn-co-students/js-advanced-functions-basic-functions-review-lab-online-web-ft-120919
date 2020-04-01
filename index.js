function saturdayFun(activity='roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity='go to the office') {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(visual_flair='*') {
    return function(adj="special") {
        return `You are ${visual_flair}${adj}${visual_flair}!`
      }
}

const Calculator = {
}

Calculator.add = function(n, m) {
    return n + m
}

Calculator.subtract = function(n, m) {
    return n - m
}

Calculator.multiply = function(n, m) {
    return n * m
}

Calculator.divide = function(n, m) {
    return n / m
}

function actionApplyer(startingInteger, arrayOfFunctions) {
    if (arrayOfFunctions = []){
        return startingInteger
    } else {
        total = startingInteger
        for (let i = 0; i < arrayOfFunctions.length; i++){
            total += arrayOfFunctions[i](total)
            console.log(total)
        }
        return total
    }
}
