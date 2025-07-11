// const {addition,subtraction,multiplication, division}=require('./lib/math');
// import {addition,subtraction,multiplication, division} from "./lib/math.js"

// console.log("Addition",addition(10,5));
// console.log("Addition",subtraction(10,5));
// console.log("Addition",multiplication(10,5));
// console.log("Addition",division(10,2));

// import { addition, subtraction, multiplication, division } from './lib/math.js';

// const args = process.argv.slice(2);  // first two are node path and filename that why extract them .
// const num1 = parseFloat(args[0]);
// const num2 = parseFloat(args[1]);

// if (isNaN(num1) || isNaN(num2)) { // if  user does not input two numbers then present this 
//   console.log("two numbers ");
//   console.log(" write this node index.js 20 5");
// }

// console.log('\n Results:');
// console.log(`Addition: ${addition(num1, num2)}`);
// console.log(`Subtraction: ${subtraction(num1, num2)}`);
// console.log(`Multiplication: ${multiplication(num1, num2)}`);
// console.log(`Division: ${division(num1, num2)}`);


import { addition, subtraction, multiplication, division } from './lib/math';
import fs from 'fs';

const args: string[] = process.argv.slice(2);

const num1: number = parseFloat(args[0]);
const num2: number = parseFloat(args[1]);

if (isNaN(num1) || isNaN(num2)) {
  console.log(' node dist/index.js 10 5');
  process.exit(1);
}

const sum: number = addition(num1, num2);
const subtract: number = subtraction(num1, num2);
const multi: number = multiplication(num1, num2);
const divide: number = division(num1, num2);

const results = [
  ['Operation', 'Result'],
  ['Addition', sum.toString()],
  ['Subtraction', subtract.toString()],
  ['Multiplication', multi.toString()],
  ['Division', divide.toString()]
];

const csvData = results.map(row => row.join(',')).join('\n');
fs.writeFileSync('results.csv', csvData);
console.log('\nResults saved to results.csv');

