// define and export the Engineer class
let Employee = require(".Employee");
let inq = require('inquirer')

class Engineer extends Employee{
    constructor(name, employeeId, email, githubId){
        super(name, employeeId, email)
        this.githubId=githubId
    }
     generate = async () => {
        try{
        let prompt = inq.promt([
            {
                type: 'input',
                name: 'name',
                message: "What is your Engineer's name?"
            },
            {
                type: 'input',
                name: 'name',
                message: "What is your Engineer's EmployeeId?"
            },
            {
                type: 'input',
                name: 'name',
                message: "What is your Engineer's Email?"
            },
            {
                type: 'input',
                name: 'name',
                message: "What is your Engineer's GithubId?"
            }
        ])    
    } catch (err){
            throw err
        }
     }
}

module.exports = {Engineer}