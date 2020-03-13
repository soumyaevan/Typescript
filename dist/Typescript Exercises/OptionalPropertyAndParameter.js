"use strict";
var GreetPerson = /** @class */ (function () {
    function GreetPerson(name, greetText) {
        this.name = name;
        this.greetText = greetText;
    }
    ;
    GreetPerson.prototype.greet = function () {
        if (this.greetText) {
            console.log(this.greetText + " " + this.name);
        }
        else {
            console.log("Hi " + this.name);
        }
    };
    return GreetPerson;
}());
var person1 = new GreetPerson('Pranoy', 'Hello');
person1.greet();
//# sourceMappingURL=OptionalPropertyAndParameter.js.map