type admin ={
    name: string,
    privileges: string[],
}

type employee ={
    name: string,
    department: string,
}

type elevetedEmployee = admin & employee;

const employee1 : elevetedEmployee ={
    name : 'Soumya',
    privileges: ['Create Database'],
    department: 'Development',
}

console.log(employee1);

type combinational1 = number | string;
type combinational2 = number | boolean;



type combinational3 = combinational1 & combinational2;