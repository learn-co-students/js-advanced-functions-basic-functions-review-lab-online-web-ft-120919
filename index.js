// Your code here
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(style="*"){
    return function(compliment="special"){
        return `You are ${style}${compliment}${style}!`
    }
}

const Calculator = {
    add: function(a,b){
        return a+b;
    },
    subtract: function(a,b){
        return a-b;
    },
    multiply: function(a,b){
        return a*b
    },
    divide: function(a,b){
        return a/b
    }
}

// function actionApplyer(integer, array){
//     return array.reduce(function(total, fn){
//         return fn(total)}, integer);
// }

function actionApplyer(integer, array){
    for (let i = 0; i < array.length; i++ ){
        integer = array[i](integer)
    }
    return integer
}