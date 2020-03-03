abstract class Department{
    static fiscalYear = 2020;
    constructor(protected readonly id: string,private name: string){}
    protected employees : string[] = [];        // Protected identifier

    static createEmployee(name : string){
        return {name};
    }
    abstract describe(): void;
    // {
    //     // console.log('Department: ' + this.name);
    //     console.log(`Department: ${this.id} -> ${this.name}`);
    // }
    addEmployee(name: string){
        this.employees.push(name);
    }
    showEmployees(){
        console.log(`Name of the employees of ${this.name} deartment are: ${this.employees}`);
        // console.log(this.employees);
    }
}
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
    describe(){
        console.log(`Department id of IT : ${this.id}`);
    }
}

// tslint:disable-next-line: max-classes-per-file
class AccountDepartment extends Department{
    private report : string = '';

    get accountReport(){
        if(this.report){
            return this.report;
        }
        throw new Error('No report found!!!');              // getter and setter
    }

    set accountReport(value: string){
        if(!value){
            throw new Error('Pass a valid value');
        }
        this.report = value;
    }

    constructor(id : string,){
        super(id, 'Account');
    }
    addEmployee(name: string){
        if(name!== 'Arup'){
            this.employees.push(name);
        }
    }
    showreport(){
        console.log(this.accountReport);
    }
    describe(){
        console.log(`Department id of account : ${this.id}`);
    }
}

const depIT = new ITDepartment('I1',['Soumya','Evan']);
depIT.addEmployee('Arup');
depIT.showAdmins();
depIT.describe();
const depAccount = new AccountDepartment('A1');
depAccount.addEmployee('Arup');
depAccount.addEmployee('Sandip');
depAccount.addEmployee('Pranoy');
// depAccount.addReport('Report is OK');
depAccount.showEmployees();
depAccount.accountReport = 'All the reports are OK'
depAccount.showreport();

const emp1 = Department.createEmployee('Soumya');
console.log(emp1);