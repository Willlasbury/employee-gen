// define and export the Engineer class
let Employee = require(".Employee");

class Engineer extends Employee{
    constructor(name, employeeId, email, githubId){
        super(name, employeeId, email)
        this.githubId=githubId
    }
}

module.exports = {Engineer}