// Your code here

function saturdayFun(fun='roller-skate') {
    return `This Saturday, I want to ${fun}!`
}

function mondayWork(work='go to the office') {
    return `This Monday, I will ${work}.`
}

function wrapAdjective(symbl='*') {
    return function(thingy='special') {
        return `You are ${symbl + thingy + symbl}!`
    }
}

const Calculator = {
    add: function(x,y) {
        return x + y
    },
    subtract: function(x,y) {
        return x - y
    },
    multiply: function(x,y) {
        return x * y
    },
    divide: function(x,y) {
        return x / y
    }
}

function actionApplyer(start, array) {
    if (array === []) {
        return start
    } else {
        array.forEach(func => {
            start = func(start)
        })
        return start
    }
}