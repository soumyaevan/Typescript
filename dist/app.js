"use strict";
var Department = /** @class */ (function () {
    function Department(n) {
        this.name = n;
    }
    Department.prototype.describe = function () {
        console.log('Department: ' + this.name);
    };
    return Department;
}());
var depName = new Department('Automation Testing');
// console.log(depName);
depName.describe();
var anotherDep = {
    name: 'Development',
    describe: depName.describe
};
anotherDep.describe();
//# sourceMappingURL=app.js.map