//DAY 44
//TASK 1 (how to export function from one js file and import it into another file)
import {add} from "./mathFunction";
console.log(add (10,11)); //Result 21
//import add function from mathFunction.ts and use it.

//TASK 2 (Create two modules export and import the class and creates an instance)
import {Person} from "./person";
let shayan = new Person("Shayan"); 
shayan.greet(); //Result Hey!! My Name is Shayan
//This snippet imports the person class and uses it to create an instance

//TASK 3 (Define difference b/w default and named exports in JSMODULES)
import { utilOne , utilTwo} from "./utils"; 
import Calculator from "./Calculator";
//it shows the syntax and usage differences b/w default and named export
