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

const Calculator = {
    add: function(a, b){
        return a+b;
    },
    subtract: function (a, b){
        return a-b;
    },
    multiply: function(a, b){
        return a*b;
    },
    divide: function(a, b){
        return a/b;
    },
}


function actionApplyer(ntgr, rryFnctns ){

    if (rryFnctns.length!=0){
        let rv;
        rryFnctns.forEach( fnctn => {
            // console.log(`rv: ${rv} ; fnctn : ${fnctn}`);
            (!rv)? rv = fnctn(ntgr): rv = fnctn(rv);
        });
        let message = `${ntgr}, multiplied by 2, added to 1000 and then modulo 7 is ${rv}. Apply each function in the Array of functions on the given base (${ntgr}) OR on the result of the use of the previous function to get this result`;

        return rv;
    } else {
        return ntgr;
    }
}