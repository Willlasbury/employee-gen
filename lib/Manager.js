// create the manager class
let Employee = require("./Employee")
let inq = require("inquirer")
class Manager extends Employee{
    constructor(name, employeeId, email, officeNumber){
        super(name, employeeId, email)
        this.officeNumber=officeNumber
        this.role="Manager"
    }
    getOfficeNumber () {
        return this.officeNumber
    }
    // create the prompts for a user to input data in the terminal
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