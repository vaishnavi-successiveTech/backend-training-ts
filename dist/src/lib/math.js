"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.division = exports.multiplication = exports.subtraction = exports.addition = void 0;
const lodash_1 = __importDefault(require("lodash"));
const addition = (num1, num2) => {
    return lodash_1.default.add(num1, num2);
};
exports.addition = addition;
const subtraction = (num1, num2) => {
    return lodash_1.default.subtract(num1, num2);
};
exports.subtraction = subtraction;
const multiplication = (num1, num2) => {
    return lodash_1.default.multiply(num1, num2);
};
exports.multiplication = multiplication;
const division = (num1, num2) => {
    return lodash_1.default.divide(num1, num2);
};
exports.division = division;
