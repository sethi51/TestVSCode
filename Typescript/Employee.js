"use strict";
exports.__esModule = true;
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(empNo, empName) {
        this.empNo = empNo;
        this.empName = empName;
    }
    Employee.prototype.showEmp = function () {
        return this.empNo + ' ' + this.empName;
    };
    return Employee;
}());
exports.Employee = Employee;
var emp = new Employee(1001, 'John');
console.log(emp.showEmp());
