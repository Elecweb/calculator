const isNumeric = (n)=> {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

const plus = (num1,num2)=>{
    return num1 + num2; 
};

const minus = (num1,num2)=>{
    return num1 - num2; 
};

const multiply = (num1,num2)=>{
    return num1 * num2; 
};

const divide = (num1,num2)=>{
    return num1 / num2; 
};

exports.isNumeric = isNumeric;
exports.plus = plus;
exports.minus = minus;
exports.multiply = multiply;
exports.divide = divide;