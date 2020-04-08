// Your code here
function saturdayFun(fun = "roller-skate"){
    return(`This Saturday, I want to ${fun}!`)
}


let mondayWork = function(days = "go to the office" ) {
    return(`This Monday, I will ${days}.`)
}
mondayWork();

let wrapAdjective = function (str="*"){
    return function(human="special"){
        return (`You are ${str}${human}${str}!`)
    }
}

let Calculator = {};
Calculator.add =function(num1, num2){
    return (num1 + num2)
}


Calculator.subtract =function(num1, num2){
    return (num1 - num2)
}


Calculator.multiply =function(num1, num2){
    return (num1 * num2)
}


Calculator.divide =function(num1, num2){
    return (num1 / num2)
}
// check again
let actionApplyer = function(start, fnArr) {
    return fnArr.reduce(function(total,fn){return fn(total)}, start);
  } 