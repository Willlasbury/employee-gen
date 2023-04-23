// define and export the Engineer class
const Employee = require("./Employee");
const inq = require('inquirer')

class Engineer extends Employee{
    constructor(name, employeeId, email, github){
        super(name, employeeId, email)
        this.github=github
        this.role = 'Engineer'
    }
    getGithub () {
        return this.github
    }
    static generate = async () => {
        try{
        return inq.prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is your engineer's name?"
            },
            {
                type: 'input',
                name: 'employeeId',
                message: "What is your engineer's EmployeeId?"
            },
            {
                type: 'input',
                name: 'email',
                message: "What is your engineer's Email?"
            },
            {
                type: 'input',
                name: 'githubId',
                message: "What is your engineer's GithubId?"
            }
        ])    
    } catch (err){
            throw err
        }
     }
}

module.exports = Engineer