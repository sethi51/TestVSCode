export class Employee{
    empNo:number;
    empName:number;

    constructor(empNo,empName){
        this.empNo=empNo;
        this.empName=empName;
    }
    showEmp() {
        return this.empNo+' '+this.empName;
    }
}

let emp = new Employee(1001,'John');
console.log(emp.showEmp());
