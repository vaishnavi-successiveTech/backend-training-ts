import  lodash from 'lodash';

export const addition = (num1, num2) => {
    return lodash.add(num1, num2);
};

export const subtraction = (num1, num2) => {
    return lodash.subtract(num1, num2);
};

export const multiplication = (num1, num2) => {
    return lodash.multiply(num1, num2);
};

export const division = (num1, num2) => {
    return lodash.divide(num1, num2);
};

// module.exports = { addition, subtraction, multiplication, division };