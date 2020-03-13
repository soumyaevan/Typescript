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

console.log(employee1);