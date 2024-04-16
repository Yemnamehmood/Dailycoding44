export class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    greet(){
        console.log(`Hey!! My Name is ${this.name}`);
    }

}
//export the person class