class Department{
    name : string;

    constructor(n: string){
        this.name = n;
    }

    describe(this: Department){
        console.log('Department: ' + this.name);
    }
}

const depName = new Department('Automation Testing')
// console.log(depName);

depName.describe();

const anotherDep = {
    name: 'Development',
    describe: depName.describe
}
anotherDep.describe();