// define and export the Manager class
let Employee = require("./Employee")
let inq = require("inquirer")
class Manager extends Employee{
    constructor(name, employeeId, email, officeNum){
        super(name, employeeId, email)
        this.officeNum=officeNum
    }
    static generate = async () => {
        try{
        return inq.prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is your manager's name?"
            },
            {
                type: 'input',
                name: 'employeeId',
                message: "What is your manager's EmployeeId?"
            },
            {
                type: 'input',
                name: 'email',
                message: "What is your manager's Email?"
            },
            {
                type: 'input',
                name: 'officeNum',
                message: "What is your manager's GithubId?"
            }
        ])    
    } catch (err){
            throw err
        }
     }
}

module.exports = Manager