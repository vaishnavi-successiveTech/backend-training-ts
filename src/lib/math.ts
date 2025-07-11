import lodash from 'lodash';

export const addition = (num1: number, num2: number): number => {
    return lodash.add(num1, num2);
};

export const subtraction = (num1: number, num2: number): number => {
    return lodash.subtract(num1, num2);
};

export const multiplication = (num1: number, num2: number): number => {
    return lodash.multiply(num1, num2);
};

export const division = (num1: number, num2: number): number => {
    return lodash.divide(num1, num2);
};
