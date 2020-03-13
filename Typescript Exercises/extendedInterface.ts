interface Person {
    name : string;
    readonly title: string;
    // age: number;
}

interface Greetable extends Person{
    greet(phrase: string): void;
}

class Man implements Greetable{
    constructor(public name: string, public title: string, private age: number){}
    greet(phrase: string){
        console.log(`${phrase} ${this.name}`);
    }
}

let user1: Greetable;

user1 = new Man('Arup', 'Software Engineer', 26);
user1.greet('Hello')