class Department{
    // name : string;

    // constructor(n: string){
    //     this.name = n;
    // }

    constructor(private readonly id: string,private name: string){}

    private employees : string[] = [];

    describe(this: Department){
        // console.log('Department: ' + this.name);
        console.log(`Department: ${this.id} -> ${this.name}`);
    }

    addEmployee(name: string){
        this.employees.push(name);
    }

    showEmployees(){
        console.log(this.employees);
    }
}

const depName = new Department('CS-IT','Automation Testing')
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
class ITDepartment extends Department{
    constructor(id: string, public admins: string[]){
        super(id,'IT');
    }

    addAdmins(name : string){
        this.admins.push(name);
    }

    showAdmins(){
        console.log(this.admins);
    }
}

// tslint:disable-next-line: max-classes-per-file
class AccountDepartment extends Department{
    private report : string = '';
    constructor(id : string,){
        super(id, 'Account');
    }
    addReport(report: string){
        this.report = report;
    }

    showreport(){
        console.log(this.report);
    }
}

const depIT = new ITDepartment('I1',['Soumya','Evan']);
depIT.addEmployee('Arup');
depIT.showAdmins();

const depAccount = new AccountDepartment('A1');
depAccount.addEmployee('Pranoy');
depAccount.addReport('Report is OK');
depAccount.showEmployees();
depAccount.showreport();