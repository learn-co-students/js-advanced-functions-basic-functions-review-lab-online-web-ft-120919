function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity="go to the office"){

    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(af="*"){

    return function(a = "special"){
        return  `You are ${af}${a}${af}!`;
    }
}

class Calculator {
    static add(a, b){
        return a+b;
    }
    static subtract(a, b){
        return a-b;
    }
    static multiply(a, b){
        return a*b;
    }
    static divide(a, b){
        return a/b;
    }
}


function actionApplyer(ntgr, rryFnctns ){
    let rv;
    rryFnctns.forEach( fnctn => {
       // console.log(`rv: ${rv} ; fnctn : ${fnctn}`);
        (!rv)? rv = fnctn(ntgr): rv = fnctn(rv);
    });
    let message = `${ntgr}, multiplied by 2, added to 1000 and then modulo 7 is ${rv}. Apply each function in the Array of functions on the given base (${ntgr}) OR on the result of the use of the previous function to get this result`;

    return rv;
}