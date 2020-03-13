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
    function Department(id, name) {
        this.id = id;
        this.name = name;
        this.employees = []; // Protected identifier
    }
    Department.createEmployee = function (name) {
        return { name: name };
    };
    Department.prototype.describe = function () {
        // console.log('Department: ' + this.name);
        console.log("Department: " + this.id + " -> " + this.name);
    };
    Department.prototype.addEmployee = function (name) {
        this.employees.push(name);
    };
    Department.prototype.showEmployees = function () {
        console.log("Name of the employees of " + this.name + " deartment are: " + this.employees);
        // console.log(this.employees);
    };
    Department.fiscalYear = 2020;
    return Department;
}());
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
    Object.defineProperty(AccountDepartment.prototype, "accountReport", {
        get: function () {
            if (this.report) {
                return this.report;
            }
            throw new Error('No report found!!!'); // getter and setter
        },
        set: function (value) {
            if (!value) {
                throw new Error('Pass a valid value');
            }
            this.report = value;
        },
        enumerable: true,
        configurable: true
    });
    AccountDepartment.prototype.addEmployee = function (name) {
        if (name !== 'Arup') {
            this.employees.push(name);
        }
    };
    AccountDepartment.prototype.showreport = function () {
        console.log(this.accountReport);
    };
    return AccountDepartment;
}(Department));
var depIT = new ITDepartment('I1', ['Soumya', 'Evan']);
depIT.addEmployee('Arup');
depIT.showAdmins();
var depAccount = new AccountDepartment('A1');
depAccount.addEmployee('Arup');
depAccount.addEmployee('Sandip');
depAccount.addEmployee('Pranoy');
// depAccount.addReport('Report is OK');
depAccount.showEmployees();
depAccount.accountReport = 'All the reports are OK';
depAccount.showreport();
var emp1 = Department.createEmployee('Soumya');
console.log(emp1);
//# sourceMappingURL=static.js.map