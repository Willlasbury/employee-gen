// define and export the Intern class.
let Employee = require("./Employee");
let inq = require("inquirer")

class Intern extends Employee{
    constructor(name, employeeId, email, school){
        super(name, employeeId, email)
        this.school=school
        this.role = 'Intern'
    }
    getSchool () {
        return this.school
    }
    // create the prompts for a user to input data in the terminal
    static generate = async () => {
        try{
        return inq.prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is your intern's name?"
            },
            {
                type: 'input',
                name: 'employeeId',
                message: "What is your intern's EmployeeId?"
            },
            {
                type: 'input',
                name: 'email',
                message: "What is your intern's Email?"
            },
            {
                type: 'input',
                name: 'school',
                message: "What is your intern's GithubId?"
            }
        ])    
    } catch (err){
            throw err
        }
     }

}

module.exports = Intern