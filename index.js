// Your code here
function saturdayFun(task = 'roller-skate') {
    return `This Saturday, I want to ${task}!`
}

function mondayWork(task='go to the office') {
    return `This Monday, I will ${task}.`
}

function wrapAdjective(adj = '*') {
    return function (input='special') {
        return `You are ${adj}${input}${adj}!`
    }
}
let Calculator = {
    add: () => { return 1+ 3},
    subtract: () =>{ return 1-3},
    multiply: () => {return 1*3},
    divide: () => {return 10/5}
}

function actionApplyer(int, fun) {
    if (fun.size === 0) {
        return int
    } else {
        let res = int
       fun.forEach(func => {
        //    console.log(res)
        //    console.log(func(int))
          res = func(res)
       });
       return res
    }
}