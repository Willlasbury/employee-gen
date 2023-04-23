// define and export the Employee class
class Employee {
    constructor(name, employeeId, email){
        this.name=name
        this.employeeId=employeeId
        this.email=email
        this.role = 'Employee'
    }
    getRole(){
        return this.role
    }
    getName(){
        return this.name
    }
    getId(){
        return this.employeeId
    }
    getEmail(){
        return this.email
    }
}
module.exports = Employee