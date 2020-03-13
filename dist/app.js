"use strict";
var employee1 = {
    name: 'Soumya',
    privileges: ['Create Database'],
    startDate: new Date(),
};
// const uemp1 : unIdentifiedEmployee ={
//     name: 'Arup',
//     privileges : ['Add Employee Data'],
//     startDate: new Date(),
// }
// console.log(uemp1);
function printEmployee(emp) {
    console.log(emp.name);
    if ('privileges' in emp) {
        console.log(emp.privileges);
    }
    if ('startDate' in emp) {
        console.log(emp.startDate);
    }
}
var emp1 = {
    name: 'Soumya',
    privileges: ['Create Database'],
    startDate: new Date(),
};
var emp2 = {
    name: 'Arup',
    startDate: new Date(),
};
var emp3 = {
    name: 'Pranoy',
    privileges: ['Create Database'],
};
printEmployee(emp1);
printEmployee(emp2);
printEmployee(emp3);
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log('Driving a car');
    };
    return Car;
}());
// tslint:disable-next-line: max-classes-per-file
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log('Driving a truck');
    };
    Truck.prototype.loadGoods = function () {
        console.log('Loading goods');
    };
    return Truck;
}());
function useVehicle(vehicle) {
    console.log(vehicle.drive());
    if (vehicle instanceof Truck) {
        vehicle.loadGoods();
    }
}
var v1 = new Car();
var v2 = new Truck();
useVehicle(v1);
useVehicle(v2);
//# sourceMappingURL=app.js.map