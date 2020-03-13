type admin ={
    name: string,
    privileges: string[],
}

type employee ={
    name: string,
    startDate: Date,
}

type elevetedEmployee = admin & employee;

const employee1 : elevetedEmployee ={
    name : 'Soumya',
    privileges: ['Create Database'],
    startDate: new Date(),
}

type unIdentifiedEmployee = admin | employee;

// const uemp1 : unIdentifiedEmployee ={
//     name: 'Arup',
//     privileges : ['Add Employee Data'],
//     startDate: new Date(),
// }
// console.log(uemp1);

function printEmployee(emp: unIdentifiedEmployee){
    console.log(emp.name);
    if('privileges' in emp){
    console.log(emp.privileges);
    }
    if('startDate' in emp){
        console.log(emp.startDate);
    }
}

const emp1 = {
    name : 'Soumya',
    privileges: ['Create Database'],
    startDate: new Date(),
}
const emp2 = {
    name : 'Arup',
    startDate: new Date(),
}
const emp3 = {
    name : 'Pranoy',
    privileges: ['Create Database'],
}
printEmployee(emp1);
printEmployee(emp2);
printEmployee(emp3);

class Car{
    drive(){
        console.log('Driving a car');
    }
}

// tslint:disable-next-line: max-classes-per-file
class Truck{
    drive(){
        console.log('Driving a truck');
    }

    loadGoods(){
        console.log('Loading goods');
    }
}

type Vehicle = Car | Truck;

function useVehicle(vehicle: Vehicle){
    console.log(vehicle.drive());
    if(vehicle instanceof Truck){
        vehicle.loadGoods();
    }
}

const v1 = new Car();
const v2 = new Truck();

useVehicle(v1);
useVehicle(v2);


