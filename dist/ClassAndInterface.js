"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    // name : string;
    // constructor(n: string){
    //     this.name = n;
    // }
    function Department(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    Department.prototype.describe = function () {
        // console.log('Department: ' + this.name);
        console.log("Department: " + this.id + " -> " + this.name);
    };
    Department.prototype.addEmployee = function (name) {
        this.employees.push(name);
    };
    Department.prototype.showEmployees = function () {
        console.log(this.employees);
    };
    return Department;
}());
var depName = new Department('CS-IT', 'Automation Testing');
// console.log(depName);
depName.describe();
depName.addEmployee('Soumya');
depName.addEmployee('Sanu');
depName.showEmployees();
// const anotherDep = {
//     name: 'Development',
//     describe: depName.describe
// }
// anotherDep.describe();
// tslint:disable-next-line: max-classes-per-file
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.admins = admins;
        return _this;
    }
    ITDepartment.prototype.addAdmins = function (name) {
        this.admins.push(name);
    };
    ITDepartment.prototype.showAdmins = function () {
        console.log(this.admins);
    };
    return ITDepartment;
}(Department));
// tslint:disable-next-line: max-classes-per-file
var AccountDepartment = /** @class */ (function (_super) {
    __extends(AccountDepartment, _super);
    function AccountDepartment(id) {
        var _this = _super.call(this, id, 'Account') || this;
        _this.report = '';
        return _this;
    }
    AccountDepartment.prototype.addReport = function (report) {
        this.report = report;
    };
    AccountDepartment.prototype.showreport = function () {
        console.log(this.report);
    };
    return AccountDepartment;
}(Department));
var depIT = new ITDepartment('I1', ['Soumya', 'Evan']);
depIT.addEmployee('Arup');
depIT.showAdmins();
var depAccount = new AccountDepartment('A1');
depAccount.addEmployee('Pranoy');
depAccount.addReport('Report is OK');
depAccount.showEmployees();
depAccount.showreport();
//# sourceMappingURL=ClassAndInterface.js.map