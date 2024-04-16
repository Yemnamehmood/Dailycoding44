"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//DAY 44
//TASK 1 (how to export function from one js file and import it into another file)
const mathFunction_1 = require("./mathFunction");
console.log((0, mathFunction_1.add)(10, 11)); //Result 21
//import add function from mathFunction.ts and use it.
//TASK 2 (Create two modules export and import the class and creates an instance)
const person_1 = require("./person");
let shayan = new person_1.Person("Shayan");
shayan.greet(); //Result Hey!! My Name is Shayan
//it shows the syntax and usage differences b/w default and named export
