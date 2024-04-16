"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hey!! My Name is ${this.name}`);
    }
}
exports.Person = Person;
//export the person class
