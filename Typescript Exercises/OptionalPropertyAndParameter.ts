interface Greet{
    name: string;
    greetText?: string;
    greet():void;
}

class GreetPerson implements Greet{
    constructor(public name: string, public greetText?: string){};
    greet(){
        if (this.greetText) {
            console.log(`${this.greetText} ${this.name}`);
        }
        else{
            console.log(`Hi ${this.name}`);
        }
    }
}

const person1 = new GreetPerson('Pranoy', 'Hello');
person1.greet();