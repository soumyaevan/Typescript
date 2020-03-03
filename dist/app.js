"use strict";
var Man = /** @class */ (function () {
    function Man(name, age) {
        this.name = name;
        this.age = age;
    }
    Man.prototype.greet = function (phrase) {
        console.log(phrase + " " + this.name);
    };
    return Man;
}());
var user1;
user1 = new Man('Arup', 26);
user1.greet('Hello');
//# sourceMappingURL=app.js.map