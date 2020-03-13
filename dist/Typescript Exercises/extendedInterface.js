"use strict";
var Man = /** @class */ (function () {
    function Man(name, title, age) {
        this.name = name;
        this.title = title;
        this.age = age;
    }
    Man.prototype.greet = function (phrase) {
        console.log(phrase + " " + this.name);
    };
    return Man;
}());
var user1;
user1 = new Man('Arup', 'Software Engineer', 26);
user1.greet('Hello');
//# sourceMappingURL=extendedInterface.js.map