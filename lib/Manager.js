// define and export the Manager class
let Employee = require(".Employee");

class Manager extends Employee{
    constructor(name, employeeId, email, officeNum){
        super(name, employeeId, email)
        this.officeNum=officeNum
    }
}

module.exports = {Manager}