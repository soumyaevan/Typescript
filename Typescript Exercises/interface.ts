interface Person {
    name : string;
    // age: number;

    greet(phrase: string): void;
}

class Man implements Person{
    constructor(public name: string, private age: number){}
    greet(phrase: string){
        console.log(`${phrase} ${this.name}`);
    }
}

let user1: Person;

user1 = new Man('Arup', 26);

user1.greet('Hello')